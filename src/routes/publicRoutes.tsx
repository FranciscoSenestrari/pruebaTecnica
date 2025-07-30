import React from "react";
import { RouteObject } from "react-router-dom";
import Login from "../pages/public/Login";
import SignIn from "@/pages/public/SignIn";
import IndexLayout from "@/layouts/IndexLayout";

export const publicRoutes: RouteObject[] = [
  {
    element: <IndexLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/signIn", element: <SignIn /> },
    ],
  },
];
