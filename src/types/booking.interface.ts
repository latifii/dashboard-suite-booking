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

// cabinId: 38;
// cabinPrice: 1750;
// created_at: "2024-07-18T11:08:17.384+00:00";
// endDate: "2024-08-14T00:00:00";
// extrasPrice: 105;
// guestId: 6;
// hasBreakfast: true;
// id: 2;
// isPaid: false;
// numGuests: 1;
// numNights: 7;
// observations: "I have a gluten allergy and would like to request a gluten-free breakfast.";
// startDate: "2024-08-07T00:00:00";
// status: "unconfirmed";
// totalPrice: 1855;
