import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    MapPinned,
    PlusCircle,
    LogOut,
    Mountain,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import useUserAuthStore from "../../store/userAuthStore";

export default function DashboardSidebar() {
    const navigate = useNavigate();
    const logout = useUserAuthStore();

    const handleLogout = () => {
        const confirmed = window.confirm(
            "Apakah Anda yakin ingin logout?"
        );
        
        if (!confirmed) return;

        logout.logout();
        navigate("/login");
    }

    const location = useLocation();

    const menus = [
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path: "/dashboard",
        },
        {
            name: "Tempat Wisata",
            icon: MapPinned,
            path: "/dashboard/wisata",
        },
        {
            name: "Tambah Wisata",
            icon: PlusCircle,
            path: "/dashboard/wisata/create",
        },
    ];

    return (
        <aside className="flex min-h-screen w-64 flex-col border-r bg-slate-50">
            <div className="border-b p-6">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-violet-600 p-2 text-white">
                        <Mountain size={22} />
                    </div>

                    <div>
                        <h1 className="font-bold text-xl">
                            VisitRank Admin
                        </h1>

                        <p className="text-sm text-slate-500">
                            Management Panel
                        </p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 space-y-2 p-4">
                {menus.map((menu) => {
                    const Icon = menu.icon;

                    const active =
                        location.pathname === menu.path;

                    return (
                        <Link
                            key={menu.path}
                            to={menu.path}
                            className={`
                                flex items-center gap-3 rounded-xl px-4 py-3 transition

                                ${
                                    active
                                        ? "bg-violet-600 text-white shadow"
                                        : "text-slate-700 hover:bg-violet-100"
                                }
                            `}
                        >
                            <Icon size={20} />
                            {menu.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t p-4">
                <button
                    onClick={handleLogout}
                    className="
                        flex w-full items-center gap-3
                        rounded-xl px-4 py-3
                        text-red-500
                        transition
                        hover:bg-red-50
                    "
                >
                    <LogOut size={20} />
                    Logout
                </button>
            </div>
        </aside>
    );
}