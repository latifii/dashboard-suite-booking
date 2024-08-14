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
