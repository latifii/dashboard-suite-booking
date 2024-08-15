import { Cabin } from "./cabin.interface";
import { Guests } from "./guests.types";
import { Variant } from "./variant.type";

export interface Booking {
  id: number;
  cabinId: number;
  guestId: number;
  cabinPrice: number;
  created_at: string;
  endDate: string;
  extrasPrice: number;
  hasBreakfast: boolean;
  isPaid: boolean;
  numGuests: number;
  numNights: number;
  observations: string;
  startDate: string;
  status: string;
  totalPrice: number;
}

export interface BookingShow {
  id: number;
  created_at: string;
  startDate: string;
  endDate: string;
  numNights: number;
  numGuests: number;
  status: string;
  totalPrice: number;
  cabins: { name: string };
  guests: { fullName: string; email: string };
}

export interface BookingBox
  extends Omit<Booking, "id" | "cabinId" | "guestId" | "status"> {
  guests: Omit<Guests, "id" | "created_at">;
  cabin: Pick<Cabin, "name">;
}

export type StatusKey = "checked-in" | "checked-out" | "unconfirmed";

export type ColorStatus = Extract<Variant, "success" | "info" | "error">;
// export interface BookingShow {
//   created_at: string;
//   startDate: string;
//   endDate: string;
//   numNights: number;
//   numGuests: number;
//   cabinPrice: string;
//   extrasPrice: string;
//   totalPrice: number;
//   hasBreakfast: boolean;
//   observations: string;
//   isPaid: boolean;
//   // guests: { fullName: guestName, email, country, countryFlag, nationalID },
//   // cabins: { name: cabinName },
// }
type FilterBooking = {
  value: string;
  field: string;
};

type SortByBooking = {
  field: string;
  direction: string;
};

export type GetBookingArg = {
  filter?: FilterBooking | null;
  sortBy?: SortByBooking;
  page?: number;
};
