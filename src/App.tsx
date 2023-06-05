import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={appRoutes} />;
}

export default App;
