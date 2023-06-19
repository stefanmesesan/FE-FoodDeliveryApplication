import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantList from "./pages/restaurant-list";
import RestaurantDetail from "./pages/restaurant-detail";
import RestaurantCreate from "./pages/restaurant-create";
import Register from "./pages/register-form";
import RegisterCustomer from "./pages/register-customer";
import RegisterDeliveryGuy from "./pages/register-delivery-guy";
import RegisterRestaurantOperator from "./pages/register-restaurant-operator";
import Login from "./pages/login";
import ContulMeu from "./pages/contul-meu";
import CosulMeu from "./pages/cosul-meu";
import ComandaPlasata from "./pages/comanda-plasata";

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
        element: <Login />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
