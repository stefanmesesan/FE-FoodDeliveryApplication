import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantList from "./pages/restaurant-list";
import RestaurantCreate from "./pages/restaurant-create";
import RestaurantSearch from "./pages/restaurant-search";
import RestaurantDetail from "./pages/restaurant-detail";
import Register from "./pages/register-form";
import RegisterCustomer from "./pages/register-customer";
import RegisterDeliveryGuy from "./pages/register-delivery-guy";
import RegisterRestaurantOperator from "./pages/register-restaurant-operator";
import Login from "./pages/login";
import ContulMeu from "./pages/contul-meu";
import CosulMeu from "./pages/cosul-meu";
import ComandaPlasata from "./pages/comanda-plasata";
import ComenzileMele from "./pages/comenzile-mele";

const router = createBrowserRouter([
    {
        path: "/restaurants",
        element: <RestaurantList />,
    },
    {
        path: "/restaurants/search",
        element: <RestaurantSearch />,
    },
    {
        path: "/restaurants/:id",
        element: <RestaurantDetail />,
    },
    {
        path: "/restaurants/create",
        element: <RestaurantCreate />,
    },
    {
        path: "/restaurants/update/:id",
        element: <RestaurantModify />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/register/customer",
        element: <RegisterCustomer />,
    },
    {
        path: "/register/deliveryGuy",
        element: <RegisterDeliveryGuy />,
    },
    {
        path: "/register/restaurantOperator",
        element: <RegisterRestaurantOperator />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/restaurants/:id/:menuItemId",
        element: <MenuItem />,
    },
    {
        path: "/contulMeu",
        element: <ContulMeu />,
    },
    {
        path: "/cos",
        element: <CosulMeu />,
    },
    {
        path: "/comandaPlasata",
        element: <ComandaPlasata />,
    },
    {
        path: "/comenzileMele",
        element: <ComenzileMele />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
