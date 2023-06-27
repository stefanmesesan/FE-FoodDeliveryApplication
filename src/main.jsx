import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RestaurantList from "./pages/restaurant-list";
import RestaurantListAdmin from "./pages/restaurant-list-admin";
import RestaurantCreate from "./pages/restaurant-create";
import RestaurantUpdate from "./pages/restaurant-update";
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
import ComenzileDisponibile from "./pages/comenzile-disponibile";
import ComenziOperator from "./pages/comenzi-operator";
import MyRestaurant from "./pages/my-restaurant";
import CustomerUpdate from "./pages/customer-update";

const router = createBrowserRouter([
    {
        path: "/restaurants",
        element: <RestaurantList />,
    },
    {
        path: "/myRestaurant",
        element: <MyRestaurant />,
    },
    {
        path: "/restaurants/admin",
        element: <RestaurantListAdmin />,
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
        element: <RestaurantUpdate />,
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
    // {
    //     path: "/restaurants/:id/:menuItemId",
    //     element: <MenuItem />,
    // },
    {
        path: "/contulMeu",
        element: <ContulMeu />,
    },
    {
        path: "/contulMeu/update",
        element: <CustomerUpdate />,
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
    {
        path: "/comenzileDisponibile",
        element: <ComenzileDisponibile />,
    },
    {
        path: "/comenziOperator",
        element: <ComenziOperator />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
