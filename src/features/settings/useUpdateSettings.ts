import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSetting } from "../../services/apiSettings";
import toast from "react-hot-toast";

type CustomError = {
  message: string;
};

export function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSettingApi, isLoading: isUpdating } = useMutation({
    mutationFn: updateSetting,
    onSuccess: () => {
      toast.success("تنظمیات با موفقیت بروزرسانی شد.");
      queryClient.invalidateQueries({ queryKey: ["setting"] });
    },
    onError: (err) => {
      toast.error((err as CustomError).message);
    },
  });

  return { updateSettingApi, isUpdating };
}
