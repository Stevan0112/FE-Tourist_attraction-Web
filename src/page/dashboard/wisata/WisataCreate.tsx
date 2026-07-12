import WisataForm from "../../../components/organisms/WisataForm";

export default function WisataCreate() {

    return (
        <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold">
                Tambah Tempat Wisata
            </h1>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
                <WisataForm
                    submitLabel="Simpan Wisata"
                />
            </div>
        </div>
    );
}