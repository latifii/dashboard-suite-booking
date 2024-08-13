import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { CustomErrorType } from "../../types/error.types";
import { createEditCabin } from "../../services/apiCabins";
import { Cabin } from "../../types/cabin.interface";

type EditCabinMuateType = {
  updatedCabin: Omit<Cabin, "id" | "created_at"> & { image: File | string };
  id: number;
};
export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabinMuate, isLoading: isEditing } = useMutation({
    mutationFn: ({ updatedCabin, id }: EditCabinMuateType) =>
      createEditCabin(updatedCabin, id),
    onSuccess: () => {
      toast.success("سویت با موفقیت ویرایش شد .");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error((err as CustomErrorType).message),
  });

  return { editCabinMuate, isEditing };
}
