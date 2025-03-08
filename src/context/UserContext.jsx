import { createContext, useReducer, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { useUsers } from "../components/users/useUsers";
import { createUser } from "../services/apiUsers";

const UserContext = createContext();

const initialState = { name: "", email: "", phone: "" };

// This reducer function manages form state changes, resetting fields, and setting form values when editing.
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    case "SET_FORM":
      return action.payload;
    default:
      return state;
  }
};

function UserProvider({ children }) {
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [editingUser, setEditingUser] = useState(null);

  const { users, setUsers, isLoading, error, isDeleting, handleDeleteUser } =
    useUsers();

  const queryClient = useQueryClient();

  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      toast.success("User Created Successfully");

      const updatedUsers = [...users, newUser];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error("Failed to Add User");
      console.log(error);
    },
  });

  // Handles adding a new user or updating an existing user's details in the list and local storage.
  const handleAddOrUpdateUser = (event) => {
    event.preventDefault();

    if (!formState.name || !formState.email || !formState.phone) {
      return;
    }

    if (editingUser !== null) {
      const updatedUsers = users.map((user) =>
        user.id === editingUser ? { ...user, ...formState } : user
      );

      toast.success("User Updated Successfully");

      setUsers(updatedUsers);
      setEditingUser(null);
    } else {
      const newUser = { id: users.length + 1, ...formState };
      setUsers([...users, newUser]);
      mutate(formState);
    }
    dispatch({ type: "RESET" });
  };

  const handleEdit = (user) => {
    setEditingUser(user.id);
    dispatch({ type: "SET_FORM", payload: user });
  };

  return (
    <UserContext.Provider
      value={{
        handleAddOrUpdateUser,
        handleEdit,
        formState,
        dispatch,
        users,
        setUsers,
        isCreating,
        isLoading,
        error,
        isDeleting,
        handleDeleteUser,
        editingUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
