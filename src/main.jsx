import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'  
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rout from './Layout/Rout';
import HOme from './Components/Home/HOme';
import AddProduct from './Components/Fotter/AddProduct/AddProduct';
import Login from './Login/Login';
import Regestratoin from './Components/Regestratoin/Regestratoin';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Layout/PrivateRoute';
import MyCart from './Components/MyCart/MyCart';
import AboutUs from './Components/AboutUs/AboutUs';
import BrandDetails from './Components/BranDetails/BrandDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Rout></Rout>,
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
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/regetraoin",
        element: <Regestratoin></Regestratoin>,
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
