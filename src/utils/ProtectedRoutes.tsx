import React from 'react';
import { Navigate } from 'react-router-dom';
interface ProtectedRoutesProps {
    children: React.ReactNode;
    isAutheticated: boolean
}
const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({children, isAutheticated}) => {
    if (!isAutheticated) {
        return <Navigate to="/login" replace />;
    }
    return <>{children}</>;
}

export default ProtectedRoutes
