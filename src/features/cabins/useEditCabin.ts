import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";
import { Cabin } from "../../types/cabin.interface";

type CustomError = {
  message: string;
};

type EditCabinParams = {
  newCabinData: Omit<Cabin, "id" | "created_at"> & { image: File | string };
  id: number;
};

export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabin, isLoading: isEditing } = useMutation<
    Cabin,
    CustomError,
    EditCabinParams
  >({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      toast.error((err as CustomError).message);
    },
  });

  return { isEditing, editCabin };
}
