import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantPage from "./pages/RestaurantPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/restaurant/:restaurantId",
    element: <RestaurantPage />,
  },
]);

export default router;
