// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

import '@fortawesome/fontawesome-free/css/all.min.css';

import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";

import Products from "./routes/Products";
import Home from "./Components/Pages/Home";
import Reports from "./routes/Reports";

import Navbar from "./Components/Navbar";
import "./App.css";

import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer"



const AppLayout = () => (
  <>
  <Header />
  <Home/>
  <Footer/>
    {/* <Navbar />
    <Outlet /> */}
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);