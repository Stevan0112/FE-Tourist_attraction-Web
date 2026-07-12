import Hero from "../components/organisms/Hero";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import WisataCard from "../components/organisms/WisataCard";
import { wisataDummy } from "../lib/dummyData";

export default function HomePage() {

    return (
        <>
            <Navbar />

            <Hero />

            <section className="mx-auto max-w-7xl px-6 py-20">
                <div className="mb-10 text-center">
                    <span className="inline-block rounded-full bg-violet-100 px-4 py-1 text-sm font-semibold text-violet-700">
                        EXPLORE
                    </span>

                    <h2 className="mt-4 text-4xl font-bold">
                        Tempat Wisata
                    </h2>

                    <p className="mt-3 text-slate-500">
                        Temukan destinasi wisata terbaik dan berikan penilaianmu.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {wisataDummy.map((wisata) => (
                        <WisataCard
                            key={wisata.id}
                            {...wisata}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}