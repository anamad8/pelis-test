import React, {useContext } from 'react';
import { Navigate } from "react-router-dom";
import { Context } from "../../Context/Context";

export function ProtectedRoute({ children }) {
    const { user, loading } = useContext(Context);
  
    if (loading) return <h1>Cargando...</h1>;
  
    if (!user) return <Navigate to="/Login" />;
  
    return <>{children}</>;
}