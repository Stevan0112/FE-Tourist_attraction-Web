import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-violet-100 via-white to-violet-50">
            <Outlet />
        </main>
    );
}