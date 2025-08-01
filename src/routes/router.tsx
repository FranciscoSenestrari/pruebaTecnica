import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";
import Error404Page from "../pages/Error404Page";
import AuthLayout from "../layouts/AuthLayout";
import RootLayout from "../layouts/RootLayout";

export const routes = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      ...publicRoutes,
      {
        element: <AuthLayout requireAuth={true} />,
        children: [...privateRoutes],
        errorElement: <Error404Page />,
      },
    ],
  },
]);
