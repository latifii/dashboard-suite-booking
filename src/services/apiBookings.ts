import supabase from "../configs/supabase";
import { BookingShow, GetBookingArg } from "../types/booking.interface";
import { PAGE_SIZE } from "../utils/instances";

type GetBookingsResult = {
  data: BookingShow[];
  count: number | null;
};

export async function getBookings({
  filter,
  sortBy,
  page,
}: GetBookingArg): Promise<GetBookingsResult> {
  let query = supabase
    .from("bookings")
    .select(
      "id,created_at,startDate,endDate,numNights,numGuests,status,totalPrice, cabins(name), guests(fullName,email)",
      { count: "exact" },
    );

  // FILTER
  if (filter) {
    query = query.eq(filter.field, filter.value);
  }

  // SORT
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  // PAGINATION
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data: data as BookingShow[], count };
}

export async function getBooking(id: string) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}
