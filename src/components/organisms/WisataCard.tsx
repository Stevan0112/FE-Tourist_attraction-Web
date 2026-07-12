import { MapPinned, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import Badge from "../atoms/Badge";

type WisataCardProps = {
    id: number;
    nama: string;
    harga: number;
    rating: number;
    image: string;
    badge?: string;
};

export default function WisataCard({
    id,
    nama,
    harga,
    rating,
    image,
    badge,
}: WisataCardProps) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="relative">
                <img
                    src={image}
                    alt={nama}
                    className="h-56 w-full object-cover"
                />

                {badge && (
                    <div className="absolute left-4 top-4">
                        <Badge>
                            {badge}
                        </Badge>
                    </div>
                )}
            </div>

            <div className="space-y-4 p-5">
                <h3 className="text-xl font-bold">
                    {nama}
                </h3>

                <div className="flex items-center gap-2">
                    <Star
                        className="fill-yellow-400 text-yellow-400"
                        size={18}
                    />

                    <span className="font-medium">
                        {rating}
                    </span>
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                    <MapPinned size={18} />

                    <span>
                        Rp {harga.toLocaleString("id-ID")}
                    </span>
                </div>

                <Link to={`/wisata/${id}`}>
                    <Button className="w-full hover:scale-[1.02]">
                        Lihat Detail
                    </Button>
                </Link>
            </div>
        </div>
    );
}