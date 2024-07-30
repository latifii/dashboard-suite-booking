import axiosInstance from "../configs/axios";
import supabase from "../configs/supabase";
import { Cabin } from "../types/cabin.interface";
import { uploadFile } from "./uploadFile";
const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getCabinsApi(): Promise<Cabin[]> {
  try {
    const response = await axiosInstance.get<Cabin[]>(
      "/rest/v1/cabins?select=*"
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching cabins: ${error.message}`);
    } else {
      throw new Error("Unknown error fetching cabins");
    }
  }
}

export async function deleteCabinApi(id: number): Promise<void> {
  try {
    const response = await axiosInstance.delete(`/rest/v1/cabins?id=eq.${id}`);
    if (response.status !== 204) {
      throw new Error("Error deleting cabin");
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error deleting cabin: ${error.message}`);
    } else {
      throw new Error("Unknown error deleting cabin");
    }
  }
}

export async function createEditCabin(
  newCabin: Omit<Cabin, "id" | "created_at"> & { image: File | string },
  id?: number
): Promise<Cabin> {
  const hasImagePath =
    typeof newCabin.image === "string" && newCabin.image?.startsWith(API_URL);

  const imageName = `${Math.random()}-${
    (newCabin.image as File).name
  }`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? newCabin.image
    : `${API_URL}/storage/v1/object/public/cabin-images/${imageName}`;

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
    throw new Error("Cabin could not be created");
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
      "Cabin image could not be uploaded and the cabin was not created"
    );
  }

  return data;
}

// export async function insertCabin(
//   newCabin: Omit<Cabin, "id" | "created_at">,file:File
// ): Promise<void> {
//   try {
//     const response = await axiosInstance.post("/rest/v1/cabins", newCabin, {
//       headers: {
//         Prefer: "return=minimal",
//       },
//     });
//     if (response.status !== 201) {
//       throw new Error("Error inserting cabin");
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new Error(`Error inserting cabin: ${error.message}`);
//     } else {
//       throw new Error("Unknown error inserting cabin");
//     }
//   }
// }
// export async function insertCabin(
//   newCabin: Omit<Cabin, "id" | "created_at">,
//   file?: File
// ): Promise<void> {
//   try {
//     const hasImagePath =
//       typeof newCabin.image === "string" && newCabin.image.startsWith(API_URL);

//     const imageName = `${Math.random()}-${
//       (newCabin.image as unknown as File).name
//     }`.replaceAll("/", "");

//     const imagePath = hasImagePath
//       ? newCabin.image
//       : `${API_URL}/storage/v1/object/public/cabin-images/${imageName}`;

//     const fileUrl = await uploadFile(file as File, imagePath);

//     if (!fileUrl) {
//       throw new Error("Error uploading file");
//     }

//     const cabinData = {
//       ...newCabin,
//       image_url: imagePath,
//     };

//     const response = await axiosInstance.post("/rest/v1/cabins", cabinData, {
//       headers: {
//         "Content-Type": "application/json",
//         Prefer: "return=minimal",
//       },
//     });

//     if (response.status !== 201) {
//       throw new Error("Error inserting cabin");
//     }
//   } catch (error) {
//     if (error instanceof Error) {
//       throw new Error(`Error inserting cabin: ${error.message}`);
//     } else {
//       throw new Error("Unknown error inserting cabin");
//     }
//   }
// }
