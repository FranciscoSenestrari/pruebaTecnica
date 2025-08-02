import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";
import Error404Page from "../pages/Error404Page";
import AuthLayout from "../layouts/AuthLayout";

export const routes = createBrowserRouter([
  {
    lazy: {
      Component: async () => {
        return (await import("@/layouts/RootLayout")).default;
      },
    },
    children: [
      ...publicRoutes,
      {
        lazy: {
          Component: async () => {
            return (await import("@/layouts/AuthLayout")).default;
          },
        },
        children: [...privateRoutes],
        errorElement: <Error404Page />,
      },
    ],
  },
]);
