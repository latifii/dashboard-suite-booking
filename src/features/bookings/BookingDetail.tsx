import { useBooking } from "./useBooking";

const BookingDetail: React.FC = () => {
  const { booking, isLoading } = useBooking();

  console.log(booking);

  return <></>;
};

export default BookingDetail;
