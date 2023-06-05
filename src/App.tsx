import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import HighlightPage from "./components/HighlightPage";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "highlight/:id",
        element: <HighlightPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRoutes} />;
}

export default App;
