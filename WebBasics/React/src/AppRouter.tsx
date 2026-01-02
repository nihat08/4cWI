import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Page1 from "./components/Router/Page1";
import Page2 from "./components/Router/Page2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Page1/></div>,
  },
  {
    path: "/p2",
    element: <div><Page2/></div>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <RouterProvider router={router} />,
);
