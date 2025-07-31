import Dashboard from "@/pages/private/Dashboard";
import PeymentReques from "@/pages/private/PeymentReques";
import React from "react";
import { RouteObject } from "react-router-dom";

export const privateRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/payment-request",
    element: <PeymentReques />,
  },
];
