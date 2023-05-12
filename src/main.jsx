import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantList from "./pages/restaurant-list";
import RestaurantDetail from "./pages/restaurant-detail";
import RestaurantCreate from "./pages/restaurant-create";

const router = createBrowserRouter([
  {
    path: "/restaurants",
    element: <RestaurantList />,
  },
  {
    path: "/restaurants/:id",
    element: <RestaurantDetail />,
  },
  {
    path: "/restaurants/create",
    element: <RestaurantCreate />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
