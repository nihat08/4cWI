import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import "./index.css"; 

import Page1 from "./components/Router/Page1";
import Page2 from "./components/Router/Page2";

const router = createBrowserRouter([
  { path: "/", element: <Page1 /> },
  { path: "/p2", element: <Page2 /> },
]);

const root = document.getElementById("root");
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}