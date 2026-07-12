import Button from "../atoms/Button";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    ratingSchema,
    type RatingSchema,
} from "../../schemas/ratingSchema";

export default function RatingForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RatingSchema>({
        resolver: zodResolver(ratingSchema),

        defaultValues: {
            namaPenilai: "",
            wahana: 5,
            kebersihan: 5,
            spotFoto: 5,
            popularitas: 5,
            review: "",
        },
    });

    const onSubmit = (data: RatingSchema) => {
        console.log("Data Rating:", data);

        // TODO:
        // await axios.post("/api/rating", data);

        alert("Rating berhasil dikirim!");
    };

    return (
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">
                Berikan Penilaian
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                    <Label>Nama Penilai</Label>
                    <Input
                        placeholder="Masukkan nama..."
                        {...register("namaPenilai")}
                    />
                    {
                        errors.namaPenilai && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.namaPenilai.message}
                            </p>
                        )
                    }
                </div>

                <div>
                    <Label>Wahana</Label>

                    <select className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" {...register("wahana", { valueAsNumber: true })}>
                        {[1,2,3,4,5].map((item)=>(
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <Label>Kebersihan</Label>

                    <select className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" {...register("kebersihan", { valueAsNumber: true })}>
                        {[1,2,3,4,5].map((item)=>(
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <Label>Spot Foto</Label>

                    <select className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" {...register("spotFoto", { valueAsNumber: true })}>
                        {[1,2,3,4,5].map((item)=>(
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <Label>Popularitas</Label>

                    <select className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2" {...register("popularitas", { valueAsNumber: true })}>
                        {[1,2,3,4,5].map((item)=>(
                            <option
                                key={item}
                                value={item}
                            >
                                {item}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <Label>Review</Label>

                    <textarea
                        rows={5}
                        className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-2"
                        placeholder="Bagikan pengalamanmu..."
                        {...register("review")}
                    />
                    {
                        errors.review && (
                            <p className="mt-1 text-sm text-red-500">
                                {errors.review.message}
                            </p>
                        )
                    }
                </div>

                <Button className="w-full">
                    Kirim Penilaian
                </Button>
            </form>
        </div>
    );
}