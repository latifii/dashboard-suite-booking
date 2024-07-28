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

export async function deleteCabin(id: number): Promise<void> {
  try {
    const response = await axiosInstance.delete(`/cabins?id=eq.${id}`);
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
