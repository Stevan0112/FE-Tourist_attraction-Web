import { z } from "zod";

export const ratingSchema = z.object({
    namaPenilai: z
        .string()
        .min(3, "Minimal 3 karakter"),

    wahana: z.number().min(1).max(5),

    kebersihan: z.number().min(1).max(5),

    spotFoto: z.number().min(1).max(5),

    popularitas: z.number().min(1).max(5),

    review: z
        .string()
        .min(5, "Review terlalu pendek"),
});

export type RatingSchema = z.infer<typeof ratingSchema>;