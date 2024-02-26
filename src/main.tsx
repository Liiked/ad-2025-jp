import React from "react";
import ReactDOM from "react-dom/client";
import Tokyo from "./Tokyo";
import Osaka from "./Osaka";
import "./index.css";
import "./flexible";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tokyo />,
  },
  {
    path: "/osaka",
    element: <Osaka />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
