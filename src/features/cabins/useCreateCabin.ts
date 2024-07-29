import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
import { Cabin } from "../../types/cabin.interface";

type CustomError = {
  message: string;
};

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation<
    Cabin,
    CustomError,
    Omit<Cabin, "id" | "created_at"> & { image: File | string }
  >({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      toast.error((err as CustomError).message);
    },
  });

  return { isCreating, createCabin };
}
