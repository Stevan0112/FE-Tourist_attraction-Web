import { Link } from "react-router-dom";
import { MapPinned } from "lucide-react";

// import Button from "../atoms/Button";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                >
                    <MapPinned
                        className="text-violet-600"
                        size={26}
                    />

                    <span className="text-xl font-bold">
                        VisitRank
                    </span>
                </Link>

                <nav className="hidden gap-8 md:flex">
                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/ranking">
                        Ranking
                    </Link>
                </nav>

                {/* <Link to="/login">
                    <Button>
                        Admin Login
                    </Button>
                </Link> */}
            </div>
        </header>
    );
}