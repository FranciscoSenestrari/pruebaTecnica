import React from "react";
import { RouteObject } from "react-router-dom";
import Login from "../pages/public/Login";

export const publicRoutes: RouteObject[] = [{ path: "/", element: <Login /> }];
