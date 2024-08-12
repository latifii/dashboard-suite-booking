import supabase from "../configs/supabase";
import { SettingType } from "../types/setting.interface";

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("تنظیمات نمی تواند آپدیت بشود ");
  }
  return data;
}

// We expect a newSetting object that looks like {setting: newValue}
export async function updateSetting(newSetting: Partial<SettingType>) {
  const { data, error } = await supabase
    .from("settings")
    .update(newSetting)
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("تنظیمات نمی تواند آپدیت بشود ");
  }
  return data;
}
