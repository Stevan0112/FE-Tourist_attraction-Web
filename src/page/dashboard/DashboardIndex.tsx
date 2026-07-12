import { Link } from "react-router-dom";
import {
    MapPinned,
    Star,
    ChartColumnIncreasing,
    Plus,
    Pencil,
    Trash2,
} from "lucide-react";

import Button from "../../components/atoms/Button";
import { wisataDummy } from "../../lib/dummyData";

export default function DashboardIndex() {

    const totalWisata = wisataDummy.length;

    const totalRating = wisataDummy.reduce(
        (acc, item) => acc + item.reviews.length,
        0
    );

    const averageRating =
        wisataDummy.reduce(
            (acc, item) => acc + item.rating,
            0
        ) / wisataDummy.length;

    return (
        <div className="space-y-8">
            {/* HERO */}
            <section className="rounded-3xl bg-linear-to-r from-violet-400 to-purple-700 p-8 text-white">
                <h1 className="text-3xl font-bold">
                    Selamat Datang 👋
                </h1>

                <p className="mt-2 max-w-xl text-violet-100">
                    Kelola data tempat wisata,
                    lihat statistik,
                    dan tambahkan destinasi baru
                    melalui dashboard ini.
                </p>

                <Link to="/dashboard/wisata/create">
                    <Button
                        className="mt-6 hover:bg-slate-100 text-violet-700"
                    >
                        <Plus size={18} />

                        Tambah Wisata
                    </Button>
                </Link>
            </section>

            {/* STATISTIK */}
            <section className="grid gap-6 md:grid-cols-3">
                <StatCard
                    title="Tempat Wisata"
                    value={totalWisata}
                    icon={<MapPinned />}
                />

                <StatCard
                    title="Total Rating"
                    value={totalRating}
                    icon={<Star />}
                />

                <StatCard
                    title="Rata-rata"
                    value={averageRating.toFixed(1)}
                    icon={<ChartColumnIncreasing />}
                />
            </section>

            {/* TABLE */}
            <section className="rounded-3xl bg-white shadow-sm">
                <div className="border-b p-6">
                    <h2 className="text-xl font-bold">
                        Tempat Wisata
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b bg-slate-50">
                                <th className="px-6 py-4 text-left">
                                    Nama
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Harga
                                </th>

                                <th className="px-6 py-4 text-left">
                                    Rating
                                </th>

                                <th className="px-6 py-4 text-center">
                                    Aksi
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                wisataDummy.map((item) => (
                                    <tr
                                        key={item.id}
                                        className="border-b hover:bg-slate-50"
                                    >
                                        <td className="px-6 py-4">
                                            {item.nama}
                                        </td>

                                        <td className="px-6 py-4">
                                            Rp {item.harga.toLocaleString("id-ID")}
                                        </td>

                                        <td className="px-6 py-4">
                                            ⭐ {item.rating}
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex justify-center gap-2">
                                                <button
                                                    className="rounded-lg bg-blue-100 p-2 text-blue-600 hover:bg-blue-200"
                                                >

                                                    <Pencil size={18} />
                                                </button>

                                                <button
                                                    className="rounded-lg bg-red-100 p-2 text-red-600 hover:bg-red-200"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );

}

type StatCardProps = {
    title: string;

    value: string | number;

    icon: React.ReactNode;
};

function StatCard({
    title,

    value,

    icon,
}: StatCardProps) {
    return (
        <div
            className="
                rounded-3xl
                bg-white
                p-6
                shadow-sm
                transition
                hover:-translate-y-1
            "
        >

            <div
                className="
                    mb-4
                    inline-flex
                    rounded-xl
                    bg-violet-100
                    p-3
                    text-violet-600
                "
            >

                {icon}
            </div>

            <h2 className="text-3xl font-bold">
                {value}
            </h2>

            <p className="mt-1 text-slate-500">
                {title}
            </p>
        </div>
    );
}