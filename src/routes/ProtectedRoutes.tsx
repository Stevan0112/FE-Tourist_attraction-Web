import { Navigate, Outlet } from "react-router-dom";
import useUserAuthStore from "../store/userAuthStore";

export default function ProtectedRoutes() {
    const { isAuthenticated } = useUserAuthStore();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}