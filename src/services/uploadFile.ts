import supabase from "../configs/supabase";

export async function uploadFile(
  file: File,
  path: string
): Promise<string | null> {
  const { data, error } = await supabase.storage
    .from("cabin-images")
    .upload(path, file);

  if (error) {
    console.error("Error uploading file:", error.message);
    return null;
  }

  return data?.path || null;
}
