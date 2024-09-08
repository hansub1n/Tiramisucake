import React from "react";
import useUserStore from "../zustand/useUserStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = useUserStore((state) => state);
    if (!user.success) {
        return <Navigate to="/" />;
    }
    return children;
};

export default ProtectedRoute;
