import {
  MutationFunction,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
// import { editCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { CustomErrorType } from "../../types/error.types";
import { editCabin } from "../../services/apiCabins";
import { Cabin } from "../../types/cabin.interface";

type EditCabinMuateType = {
  updatedCabin: Omit<Cabin, "id" | "created_at"> & { image: File | string };
  id: number;
};
export function useEditCabin() {
  const queryClient = useQueryClient();

  const { mutate: editCabinMuate, isLoading: isEditing } = useMutation({
    mutationFn: ({ updatedCabin, id }: EditCabinMuateType) =>
      editCabin(updatedCabin, id),
    onSuccess: () => {
      toast.success("سویت با موفقیت ویرایش شد .");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => toast.error((err as CustomErrorType).message),
  });

  return { editCabinMuate, isEditing };
}
