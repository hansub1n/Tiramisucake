import React from "react";
import useUserStore from "../zustand/UseUserStore";

const ProtectedRoute = () => {
    const { user } = useUserStore((state) => state);
    if (!user.success) {
        return <Navigate to="/" />;
    }
    return <div>ProtectedRoute</div>;
};

export default ProtectedRoute;
