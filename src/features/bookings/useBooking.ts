import { useQuery } from "@tanstack/react-query";
import { getBooking } from "../../services/apiBookings";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();
  const { data: booking, isLoading } = useQuery({
    queryKey: ["booking"],
    queryFn: () => {
      if (bookingId) {
        return getBooking(bookingId);
      } else {
        throw new Error("Booking ID is undefined");
      }
    },
    enabled: !!bookingId,
    retry: false,
  });

  return { booking, isLoading };
}
