import Button from "../atoms/Button";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="bg-linear-to-b from-violet-50 to-white">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
                {/* Left Content */}
                <div>
                    <span className="inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                        ⭐ Sistem Perangkingan Wisata
                    </span>

                    <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
                        Temukan
                        <span className="text-violet-600">
                            {" "}Tempat Wisata{" "}
                        </span>
                        Terbaik
                    </h1>

                    <p className="mt-6 text-lg text-slate-600">
                        Berikan penilaian terhadap tempat wisata favoritmu
                        dan lihat hasil peringkatnya.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <Link to="/ranking">
                            <Button>
                                Mulai Rating
                            </Button>
                        </Link>

                        <Link to="/ranking">
                            <Button variant="secondary">
                                Lihat Ranking
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right Content */}
                <div className="hidden lg:flex justify-center">
                    <img
                        src="https://picsum.photos/600/500?random=10"
                        alt="Wisata"
                        className="rounded-3xl shadow-xl"
                    />
                </div>
            </div>
        </section>
    );
}