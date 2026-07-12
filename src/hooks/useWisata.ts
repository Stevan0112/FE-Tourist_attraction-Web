import { useQuery } from "@tanstack/react-query";
import { getWisata } from "../services/wisata.service";

export function useWisata() {
    return useQuery({
        queryKey: ["wisata"],
        queryFn: getWisata,
    });
}