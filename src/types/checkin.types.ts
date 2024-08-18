import { Booking } from "./booking.interface";

export type ObjCheckinUpdate = Partial<
  Pick<Booking, "hasBreakfast" | "extrasPrice" | "totalPrice">
> &
  Pick<Booking, "status" | "isPaid">;
