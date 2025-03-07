import { useState, useEffect } from "react";
import { getUsers } from "../../services/apiUsers";
import { useQuery } from "@tanstack/react-query";

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

  // Save fetched users to local storage and state
  useEffect(() => {
    if (fetchedUsers) {
      setUsers(fetchedUsers);
      localStorage.setItem("users", JSON.stringify(fetchedUsers));
    }
  }, [fetchedUsers]);

  return { isLoading, error, users };
}
