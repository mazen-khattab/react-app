import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import JS from "./pages/JS";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <h2 className="errorMessage">This Page Not Found!!!</h2>,
  },

  {
    path: "/html",
    element: <HTML></HTML>,
  },

  {
    path: "/Css",
    element: <Css></Css>,
  },

  {
    path: "/javascript",
    element: <JS></JS>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
