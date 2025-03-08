import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { deleteUser, getUsers } from "../../services/apiUsers";

export function useUsers() {
  const [users, setUsers] = useState([]);

  // Load users from local storage if available
  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  const {
    data: fetchedUsers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    enabled: users.length === 0,
  });

  const queryClient = useQueryClient();

  // Save fetched users to local storage and state
  useEffect(() => {
    if (fetchedUsers) {
      setUsers(fetchedUsers);
      localStorage.setItem("users", JSON.stringify(fetchedUsers));
    }
  }, [fetchedUsers]);

  const { mutate, isLoading: isDeleting } = useMutation({
    mutationFn: deleteUser,
    onSuccess: (_, userId) => {
      toast.success("User deleted successfully");

      // Update the local state by filtering out the deleted user
      const updatedUsers = users.filter((user) => user.id !== userId);
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // Invalidate the users query to refetch fresh data (optional)
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error("Failed to delete user");
      console.log(error);
    },
  });

  function handleDeleteUser(userID) {
    mutate(userID);
  }

  return {
    isLoading,
    error,
    users,
    isDeleting,
    handleDeleteUser,
    setUsers,
  };
}
