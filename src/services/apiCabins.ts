import axiosInstance from "../configs/axios";
import { Cabin } from "../types/cabin.interface";

export async function getCabins(): Promise<Cabin[]> {
  try {
    const response = await axiosInstance.get<Cabin[]>("/cabins?select=*");
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error fetching cabins: ${error.message}`);
    } else {
      throw new Error("Unknown error fetching cabins");
    }
  }
}
// import supabase from "./supabase";

// export async function getCabins() {
//   const { data, error } = await supabase.from("cabins").select("*");

//   if (error) {
//     console.error(error);
//     throw new Error("Cabins could not be loaded");
//   }

//   return data;
// }
