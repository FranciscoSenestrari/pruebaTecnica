import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import LoadingPage from "../pages/LoadingPage";

interface AuthLayoutProps {
  requireAuth?: boolean;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ requireAuth = false }) => {
  const { user, loading, isAuthenticated } = useAuth();

  if (loading) {
    return <LoadingPage />;
  }

  // Si requiere autenticación y no está autenticado, redirigir a login
  if (requireAuth && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Si no requiere autenticación y está autenticado, redirigir a dashboard
  if (!requireAuth && isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthLayout;
