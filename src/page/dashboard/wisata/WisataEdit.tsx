import { useParams } from "react-router-dom";

import WisataForm from "../../../components/organisms/WisataForm";
import { wisataDummy } from "../../../lib/dummyData";

export default function WisataEdit() {

    const { id } = useParams();

    const wisata = wisataDummy.find(
        (item) => item.id === Number(id)
    );

    if (!wisata) {
        return (
            <div className="rounded-2xl bg-white p-8">
                <h1 className="text-2xl font-bold">
                    Data tidak ditemukan
                </h1>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold">
                Edit Tempat Wisata
            </h1>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
                <WisataForm
                    submitLabel="Update Wisata"

                    defaultValues={{
                        nama: wisata.nama,
                        lokasi: wisata.lokasi,
                        harga: wisata.harga,
                        image: wisata.image,
                        deskripsi: wisata.deskripsi,
                    }}
                />
            </div>
        </div>
    );
}