import { useParams } from "react-router-dom";
import { MapPinned, Star, Ticket } from "lucide-react";

import Badge from "../components/atoms/Badge";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import RatingForm from "../components/organisms/RatingForm";

import { wisataDummy } from "../lib/dummyData";

export default function DetailWisataPage() {

    const { id } = useParams();

    const wisata = wisataDummy.find(
        (item) => item.id === Number(id)
    );

    if (!wisata) {
        return (
            <>
                <Navbar />
                <div className="mx-auto max-w-5xl py-20 text-center">
                    <h1 className="text-3xl font-bold">
                        Wisata tidak ditemukan
                    </h1>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Navbar />

            <section className="mx-auto max-w-7xl px-6 py-10">
                <div className="grid gap-10 lg:grid-cols-2">
                    {/* Informasi */}
                    <div>
                        <img
                            src={wisata.image}
                            alt={wisata.nama}
                            className="h-96 w-full rounded-3xl object-cover shadow-lg"
                        />

                        <div className="mt-6 flex items-center justify-between">
                            <h1 className="text-4xl font-extrabold">
                                {wisata.nama}
                            </h1>

                            {wisata.badge && (
                                <Badge>
                                    {wisata.badge}
                                </Badge>
                            )}
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-5 text-slate-600">
                            <div className="flex items-center gap-2">
                                <Star
                                    className="fill-yellow-400 text-yellow-400"
                                    size={20}
                                />

                                <span className="font-semibold">
                                    {wisata.rating}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <MapPinned size={20} />

                                <span>
                                    {wisata.lokasi}
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <Ticket size={20} />

                                <span>
                                    Rp {wisata.harga.toLocaleString("id-ID")}
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 rounded-2xl bg-slate-100 p-5">
                            <h2 className="mb-3 text-xl font-bold">
                                Tentang Wisata
                            </h2>

                            <p className="leading-8 text-slate-700">
                                {wisata.deskripsi}
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <RatingForm />
                </div>

                <section className="mt-16">
                    <h2 className="mb-8 text-3xl font-bold">
                        Review Pengunjung
                    </h2>

                    <div className="space-y-6">
                        {wisata.reviews.length > 0 ? (
                            wisata.reviews.map((review, index) => (
                                <div
                                    key={index}
                                    className="rounded-2xl border bg-white p-6 shadow-sm"
                                >

                                    <div className="mb-3 flex items-center justify-between">
                                        <h3 className="font-bold">
                                            {review.nama}
                                        </h3>

                                        <div className="flex items-center gap-2">
                                            <Star
                                                size={18}
                                                className="fill-yellow-400 text-yellow-400"
                                            />

                                            <span>
                                                {review.rating}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-slate-600">
                                        {review.komentar}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <div className="rounded-2xl border border-dashed p-8 text-center text-slate-500">
                                Belum ada review.
                            </div>
                        )}
                    </div>
                </section>
            </section>

            <Footer />
        </>
    );
}