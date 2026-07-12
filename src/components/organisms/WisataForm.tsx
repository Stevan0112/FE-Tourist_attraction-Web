import { useForm } from "react-hook-form";

import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export type WisataFormData = {
    nama: string;
    lokasi: string;
    harga: number;
    image: string;
    deskripsi: string;
};

type WisataFormProps = {
    defaultValues?: WisataFormData;
    submitLabel: string;
};

export default function WisataForm({
    defaultValues,
    submitLabel,
}: WisataFormProps) {

    const {
        register,
        handleSubmit,
        watch,
    } = useForm<WisataFormData>({
        defaultValues,
    });

    const image = watch("image");

    const onSubmit = (data: WisataFormData) => {
        console.log(data);

        alert(
            "Backend belum tersedia.\n\nData berhasil divalidasi."
        );
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >
            <div>
                <Label>
                    Nama Wisata
                </Label>

                <Input
                    {...register("nama")}
                />
            </div>

            <div>
                <Label>
                    Lokasi
                </Label>

                <Input
                    {...register("lokasi")}
                />
            </div>

            <div>
                <Label>
                    Harga
                </Label>

                <Input
                    type="number"
                    {...register("harga", {
                        valueAsNumber: true,
                    })}
                />
            </div>

            <div>
                <Label>
                    URL Gambar
                </Label>

                <Input
                    {...register("image")}
                />
                <div className="mt-4">
                    {image ? (
                        <img
                            src={image}
                            alt="Preview"
                            className="h-56 w-full rounded-xl object-cover border"
                            onError={(e) => {
                                e.currentTarget.src =
                                    "https://placehold.co/800x500?text=Image+Not+Found";
                            }}
                        />
                    ) : (
                        <div className="flex h-56 items-center justify-center rounded-xl border-2 border-dashed border-slate-300 text-slate-400">
                            Preview gambar akan muncul di sini
                        </div>
                    )}
                </div>
            </div>

            <div>
                <Label>
                    Deskripsi
                </Label>

                <textarea
                    rows={5}
                    className="
                        w-full
                        rounded-lg
                        border
                        border-slate-300
                        px-3
                        py-2
                        outline-none
                        focus:ring-2
                        focus:ring-violet-500
                    "
                    {...register("deskripsi")}
                />
            </div>

            <Button
                type="submit"
                className="w-full"
            >
                {submitLabel}
            </Button>
        </form>
    );
}