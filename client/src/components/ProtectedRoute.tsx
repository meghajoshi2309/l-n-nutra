import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface ProtectedRouteProps {
  adminOnly?: boolean;
  children?: React.ReactNode;
}

const ProtectedRoute = ({ adminOnly = false, children }: ProtectedRouteProps) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && user.role !== 'ADMIN') {
    return <Navigate to="/" />;
  }

  // Render children if provided, otherwise render nested routes (via Outlet)
  return children ? <>{children}</> : <Outlet />;
};

export default ProtectedRoute;
