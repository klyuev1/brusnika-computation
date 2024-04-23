import React from 'react';
import { Navigate } from "react-router-dom";
import { useAppSelector } from '../../store/hooks/hooks';

export interface ProtectedRouteProps {
  element: React.ElementType;
  [key: string]: unknown;
}

const ProtectedRoute: React.FC<ProtectedRouteProps>  = ({ element: Component, ...props  }) => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  return (
    isLoggedIn ? <Component {...props} /> : <Navigate to="/" replace/>
)}

export default ProtectedRoute;