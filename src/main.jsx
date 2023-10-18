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




const router = createBrowserRouter([
  {
    path: "/",
    element: <Rout></Rout>,
    children: [
      {
        path: '/',
        element:<HOme></HOme>
      },
      {
        path: '/addCart',
        element:<AddProduct></AddProduct>
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/regetraoin',
        element:<Regestratoin></Regestratoin>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
