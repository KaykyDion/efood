import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantPage from "./pages/RestaurantPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/1234",
    element: <RestaurantPage />,
  },
]);

export default router;
