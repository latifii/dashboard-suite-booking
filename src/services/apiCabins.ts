import supabase from "../configs/supabase";
import { Cabin } from "../types/cabin.interface";
import { SUPABASE_URL } from "../utils/instances";
import { uploadFile } from "./uploadFile";

export async function getCabins(): Promise<Cabin[]> {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data as Cabin[];
}

export async function deleteCabin(id: number): Promise<Cabin[]> {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }

  return data as Cabin[];
}

export async function createEditCabin(
  newCabin: Omit<Cabin, "id" | "created_at"> & { image: File | string },
  id?: number,
): Promise<Cabin> {
  const hasImagePath =
    typeof newCabin.image === "string" &&
    newCabin.image?.startsWith(SUPABASE_URL);
  console.log("hasImagePath", hasImagePath);

  const imageName = `${Math.random()}-${
    (newCabin.image as File).name
  }`.replaceAll("/", "");

  console.log("imageName", imageName);

  const imagePath = hasImagePath
    ? newCabin.image
    : `${SUPABASE_URL}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/edit cabin
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let query: any = supabase.from("cabins");

  // A) CREATE
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  // B) EDIT
  if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("ارور* سوییت نمی تواند اضافه بشود. ");
  }

  // 2. Upload image
  if (hasImagePath) return data;

  const file = newCabin.image as File;
  const filePath = imageName;
  const fileUrl = await uploadFile(file, filePath);

  // 3. Delete the cabin IF there was an error uploading image
  if (!fileUrl) {
    await supabase.from("cabins").delete().eq("id", data.id);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created",
    );
  }

  return data;
}
