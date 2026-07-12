import { Outlet } from "react-router-dom";

import DashboardSidebar from "../components/organisms/DashboardSidebar";
import DashboardNavbar from "../components/organisms/DashboardNavbar";

export default function DashboardLayout() {
    return (
        <div className="flex min-h-screen">
            <DashboardSidebar />

            <div className="flex flex-col flex-1">
                <DashboardNavbar />
                <main className="p-6 flex-1 bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}