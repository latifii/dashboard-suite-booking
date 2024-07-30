import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateSettingApi } from "../../services/apiSettings";
import toast from "react-hot-toast";

export function useUpdatingSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Setting successfully edited");
      queryClient.invalidateQueries({ queryKey: ["settings"] });
    },
    onError: (err) => {
      if (err instanceof Error) {
        toast.error(err.message);
      }
    },
  });

  return { updateSetting, isUpdating };
}
