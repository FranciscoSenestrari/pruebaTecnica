import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import DashboardLayout from "./DashboardLayout";
import LoaderCompoenent from "@/components/LoaderComponent/LoaderCompoenent";
import RouteTracker from "../components/RouterTracker/RouterTrackerWrapper";

interface AuthLayoutProps {
  requireAuth?: boolean;
}

export default function AuthLayout({ requireAuth = false }: AuthLayoutProps) {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) {
    return <LoaderCompoenent />;
  }

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (!requireAuth && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <RouteTracker />
      <DashboardLayout />
    </>
  );
}
