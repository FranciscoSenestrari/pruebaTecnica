import React from "react";
import { RouteObject } from "react-router-dom";

// Componente temporal para el dashboard
const Dashboard = () => (
  <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <p>Esta es una página privada. Solo usuarios autenticados pueden verla.</p>
  </div>
);

export const privateRoutes: RouteObject[] = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
