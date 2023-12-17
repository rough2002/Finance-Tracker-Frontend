import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import "./index.css";
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import Transaction from "./pages/Transaction";
import Goal from "./pages/Goal";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "dashboard", index: true, element: <Home /> },
      {
        path: "budget",
        element: <Budget />,
      },
      {
        path: "transactions",
        element: <Transaction />,
      },
      { path: "goal", element: <Goal /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
