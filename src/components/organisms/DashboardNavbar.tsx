import {
    Bell,
    CircleUserRound,
} from "lucide-react";

import useUserAuthStore from "../../store/userAuthStore";

export default function DashboardNavbar() {

    const { user } = useUserAuthStore();

    return (
        <header
            className="
                flex h-16 items-center justify-between
                border-b bg-white px-6
            "
        >
            <div>
                <h1 className="text-xl font-bold">
                    Dashboard
                </h1>

                <p className="text-sm text-slate-500">
                    Kelola data tempat wisata
                </p>
            </div>

            <div className="flex items-center gap-5">
                <button
                    className="
                        rounded-full
                        bg-slate-100
                        p-2
                        transition
                        hover:bg-slate-200
                    "
                >
                    <Bell size={20} />
                </button>

                <div className="flex items-center gap-3">
                    <div
                        className="
                            rounded-full
                            bg-violet-100
                            p-2
                            text-violet-700
                        "
                    >
                        <CircleUserRound size={24} />
                    </div>

                    <div>
                        <p className="text-sm text-slate-500">
                            Selamat Datang
                        </p>

                        <p className="font-semibold">
                            {user?.username ?? "Admin"}
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}