import axiosInstance from "../configs/axios";
import { SettingType } from "../types/setting.interface";

export async function getSettingsApi(): Promise<SettingType[]> {
  try {
    const response = await axiosInstance.get<SettingType[]>(
      "/rest/v1/settings"
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching setting:${error}`);
    } else {
      throw new Error("Unknown error fetching cabins");
    }
  }
}

export async function updateSettingApi(
  data: Partial<SettingType>
): Promise<void> {
  try {
    await axiosInstance.patch(`/rest/v1/settings?id=eq.1`, data, {
      headers: {
        Prefer: "return=minimal",
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error updating setting: ${error}`);
    } else {
      throw new Error("Unknown error updating setting");
    }
  }
}
