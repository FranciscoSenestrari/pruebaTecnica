import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";
import AuthLayout from "../layouts/AuthLayout";

export const routes = createBrowserRouter([
  ...publicRoutes,
  {
    element: <AuthLayout requireAuth={true} />,
    children: [...privateRoutes],
  },
]);
