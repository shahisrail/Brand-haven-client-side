import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rout from "./Layout/Rout";
import HOme from "./Components/Home/HOme";
import AddProduct from "./Components/Fotter/AddProduct/AddProduct";
import Login from "./Login/Login";
import Regestratoin from "./Components/Regestratoin/Regestratoin";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./Layout/PrivateRoute";
import MyCart from "./Components/MyCart/MyCart";
import AboutUs from "./Components/AboutUs/AboutUs";
import BrandDetails from "./Components/BranDetails/BrandDetails";
import Errropage from "./Errropage";
import Update from "./Components/Update/Update";
import Details from "./Components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rout></Rout>,
    errorElement: <Errropage></Errropage>,
    children: [
      {
        path: "/",
        element: <HOme></HOme>,
        loader: () => fetch("/Brand.json"),
      },
      {
        path: "/addCart",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader:()=>fetch("http://localhost:5000/addtocard")
      },
      {
        path: "/about",
        element: (
          <PrivateRoute>
            <AboutUs></AboutUs>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:brandName",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/brand/${params.brandName}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regetraoin",
        element: <Regestratoin></Regestratoin>,
      },
      {
        path: "/update",
        element: <Update></Update>,
      },
      {
        path: "/detail/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cart/${params.id}`),
      },
    ],
  },  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
