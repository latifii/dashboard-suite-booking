import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import { CustomErrorType } from "../../types/error.types";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { mutate: deleteCabinApi, isLoading: isDeleting } = useMutation({
    mutationFn: deleteCabin,
    onSuccess: () => {
      toast.success("سوییت با موفقیت حذف شد");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError: (err) => {
      toast.error((err as CustomErrorType).message);
    },
  });
  return { deleteCabinApi, isDeleting };
}
