import supabase from "../configs/supabase";
import { Cabin } from "../types/cabin.interface";
import { uploadFile } from "./uploadFile";
const API_URL = import.meta.env.VITE_API_URL;

export async function getCabins(): Promise<Cabin[]> {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data as Cabin[];
}

// export async function createEditCabin(
//   newCabin: Cabin,
//   id?: number,
// ): Promise<Cabin> {
//   const hasImagePath = (newCabin.image as string)?.startsWith?.(supabaseUrl);

//   const imageName =
//     `${Math.random()}-${(newCabin.image as File).name}`.replaceAll("/", "");
//   const imagePath = hasImagePath
//     ? (newCabin.image as string)
//     : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

//   // 1. Create/edit cabin
//   let query = supabase.from("cabins");

//   // A) CREATE
//   if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

//   // B) EDIT
//   if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

//   const { data, error } = await query.select().single();

//   if (error) {
//     console.error(error);
//     throw new Error("Cabin could not be created");
//   }

//   // 2. Upload image
//   if (hasImagePath) return data as Cabin;

//   const { error: storageError } = await supabase.storage
//     .from("cabin-images")
//     .upload(imageName, newCabin.image as File);

//   // 3. Delete the cabin IF there was an error uploading the image
//   if (storageError) {
//     await supabase.from("cabins").delete().eq("id", data.id);
//     console.error(storageError);
//     throw new Error(
//       "Cabin image could not be uploaded and the cabin was not created",
//     );
//   }

//   return data as Cabin;
// }

// export async function deleteCabin(id: number): Promise<Cabin[]> {
//   const { data, error } = await supabase.from("cabins").delete().eq("id", id);

//   if (error) {
//     console.error(error);
//     throw new Error("Cabin could not be deleted");
//   }

//   return data as Cabin[];
// }

// export async function createEditCabin(
//   newCabin: Omit<Cabin, "id" | "created_at"> & { image: File | string },
//   id?: number
// ): Promise<Cabin> {
//   const hasImagePath =
//     typeof newCabin.image === "string" && newCabin.image?.startsWith(API_URL);

//   const imageName = `${Math.random()}-${
//     (newCabin.image as File).name
//   }`.replaceAll("/", "");
//   const imagePath = hasImagePath
//     ? newCabin.image
//     : `${API_URL}/storage/v1/object/public/cabin-images/${imageName}`;

//   // 1. Create/edit cabin
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   let query: any = supabase.from("cabins");

//   // A) CREATE
//   if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

//   // B) EDIT
//   if (id) query = query.update({ ...newCabin, image: imagePath }).eq("id", id);

//   const { data, error } = await query.select().single();

//   if (error) {
//     console.error(error);
//     throw new Error("Cabin could not be created");
//   }

//   // 2. Upload image
//   if (hasImagePath) return data;

//   const file = newCabin.image as File;
//   const filePath = imageName;
//   const fileUrl = await uploadFile(file, filePath);

//   // 3. Delete the cabin IF there was an error uploading image
//   if (!fileUrl) {
//     await supabase.from("cabins").delete().eq("id", data.id);
//     throw new Error(
//       "Cabin image could not be uploaded and the cabin was not created"
//     );
//   }

//   return data;
// }
