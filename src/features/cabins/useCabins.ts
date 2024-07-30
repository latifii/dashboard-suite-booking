import { useQuery } from "@tanstack/react-query";
import { getCabinsApi } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabinsApi,
  });
  return { isLoading, cabins, error };
}
