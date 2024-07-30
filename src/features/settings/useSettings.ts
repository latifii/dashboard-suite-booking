import { useQuery } from "@tanstack/react-query";
import { getSettingsApi } from "../../services/apiSettings";
import { SettingType } from "../../types/setting.interface";

export function useSettings() {
  const {
    data: settings,
    error,
    isLoading,
  } = useQuery<SettingType[]>({
    queryKey: ["settings"],
    queryFn: getSettingsApi,
  });

  const setting = settings ? settings[0] : undefined;

  return { setting, error, isLoading };
}
