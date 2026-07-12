import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
    Search,
    Plus,
    Pencil,
    Trash2,
    Star,
} from "lucide-react";

import Input from "../../../components/atoms/Input";
import Button from "../../../components/atoms/Button";

import { wisataDummy } from "../../../lib/dummyData";

export default function WisataIndex() {

    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {
        return wisataDummy.filter((item) =>
            item.nama
                .toLowerCase()
                .includes(search.toLowerCase())
        );
    }, [search]);

    const handleDelete = (nama: string) => {
        const ok = window.confirm(
            `Hapus ${nama}?`
        );

        if (!ok) return;

        alert("Backend belum tersedia.");
    };

    return (
        <div className="space-y-8">
            {/* HEADER */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Tempat Wisata
                    </h1>

                    <p className="text-slate-500">
                        Kelola seluruh destinasi wisata.
                    </p>
                </div>

                <Link to="/dashboard/wisata/create">
                    <Button>
                        <Plus size={18} />

                        Tambah Wisata
                    </Button>
                </Link>
            </div>

            {/* SEARCH */}
            <div className="relative max-w-md">
                <Search
                    size={18}
                    className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        text-slate-400
                    "
                />

                <Input
                    placeholder="Cari tempat wisata..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10"
                />
            </div>

            {/* LIST */}
            <div className="grid gap-6">
                {
                    filtered.length > 0 ? (
                        filtered.map((item) => (
                            <div
                                key={item.id}
                                className="
                                    flex
                                    flex-col
                                    gap-6
                                    rounded-3xl
                                    bg-white
                                    p-5
                                    shadow-sm
                                    transition
                                    hover:-translate-y-1
                                    md:flex-row
                                "
                            >
                                <img
                                    src={item.image}
                                    alt={item.nama}
                                    className="
                                        h-40
                                        w-full
                                        rounded-2xl
                                        object-cover
                                        md:w-60
                                    "
                                />

                                <div className="flex flex-1 flex-col justify-between">
                                    <div>
                                        <h2 className="text-2xl font-bold">
                                            {item.nama}
                                        </h2>

                                        <p className="mt-2 text-slate-500">
                                            Rp {item.harga.toLocaleString("id-ID")}
                                        </p>

                                        <div className="mt-3 flex items-center gap-2">
                                            <Star
                                                className="fill-yellow-400 text-yellow-400"
                                                size={18}
                                            />

                                            {item.rating}
                                        </div>
                                    </div>

                                    <div className="mt-5 flex gap-3">
                                        <Link to={`/dashboard/wisata/edit/${item.id}`}>
                                            <Button
                                                className="bg-blue-600 hover:bg-blue-700"
                                            >
                                                <Pencil size={18} />

                                                Edit
                                            </Button>
                                        </Link>

                                        <Button
                                            variant="danger"
                                            onClick={() =>
                                                handleDelete(item.nama)
                                            }
                                        >
                                            <Trash2 size={18} />

                                            Delete
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div
                            className="
                                rounded-3xl
                                border-2
                                border-dashed
                                p-16
                                text-center
                            "
                        >
                            <h2 className="text-2xl font-bold">
                                Data tidak ditemukan
                            </h2>

                            <p className="mt-2 text-slate-500">
                                Coba gunakan kata kunci lain.
                            </p>
                        </div>
                    )
                }
            </div>
        </div>
    );
}