import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoadingPage from "../pages/LoadingPage";

interface AuthLayoutProps {
  requireAuth?: boolean;
}

export default function AuthLayout({ requireAuth = false }: AuthLayoutProps) {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) {
    return <LoadingPage />;
  }

  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (!requireAuth && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
