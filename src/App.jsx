import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AddUser from "./components/addUser/AddUser";
import SearchUser from "./components/searchUser/SearchUser";
import Users from "./components/users/Users";
import { UserProvider } from "./context/UserContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <UserProvider>
        <SearchUser />
        <AddUser />
        <Users />

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-background)",
              color: "var(--color-text)",
              fontFamily: "var(--font-family)",
            },
          }}
        />
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
