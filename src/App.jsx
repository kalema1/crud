import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import AddUser from "./components/addUser/AddUser";
import SearchUser from "./components/searchUser/SearchUser";
import Users from "./components/users/Users";

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

      <SearchUser />
      <AddUser />
      <Users />
    </QueryClientProvider>
  );
}

export default App;
