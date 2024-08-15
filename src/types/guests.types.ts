export interface Guests {
  countryFlag: string;
  created_at: string;
  email: string;
  fullName: string;
  id: number;
  nationalID: string;
  nationality: string;
}

const data = {
  cabinId: 44,
  cabinPrice: 5000,
  cabins: {
    id: 44,
    name: "007",
    image:
      "https://qsndopkcnpapzvdmzyxl.supabase.co/storage/v1/object/public/cabin-images/cabin-007.jpg",
    discount: 100,
    created_at: "2024-08-07T11:08:31.187804+00:00",
  },
  created_at: "2024-07-31T11:08:17.386+00:00",
  endDate: "2024-09-26T00:00:00",
  extrasPrice: 1050,
  guestId: 25,
  guests: {
    id: 25,
    email: "nina@hotmail.com",
    fullName: "Nina Williams",
    created_at: "2024-08-07T11:08:30.611828+00:00",
    nationalID: "2345678901",
  },
  hasBreakfast: true,
  id: 21,
  isPaid: true,
  numGuests: 7,
  numNights: 10,
  observations: "",
  startDate: "2024-09-16T00:00:00",
  status: "unconfirmed",
  totalPrice: 6050,
};
