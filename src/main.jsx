import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { getTheme } from "./Util/theme.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FancyImg from "./Components/FancyImg/FancyImg.jsx";
import Home from "./Components/Home/Home";
import App from "./App";
getTheme();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <FancyImg />,
      },
      {
        path: "/app",
        element: <App />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
