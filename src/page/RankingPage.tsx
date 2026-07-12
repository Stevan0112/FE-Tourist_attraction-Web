import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import WisataCard from "../components/organisms/WisataCard";
import { wisataDummy } from "../lib/dummyData";

export default function RankingPage() {

    return (
        <>
            <Navbar />

            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="text-center mb-12">
                    <span className="inline-block rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
                        HASIL SPK
                    </span>

                    <h1 className="mt-4 text-5xl font-bold">
                        Ranking Tempat Wisata
                    </h1>

                    <p className="mt-3 text-slate-500">
                        Perangkingan berdasarkan metode SAW, WP, dan TOPSIS.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {wisataDummy.map((item) => (
                        <WisataCard
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}