import { HiArrowLongRight } from "react-icons/hi2";
import Heading from "../../components/ui/Heading";
import Row from "../../components/ui/Row";
import Tag from "../../components/ui/Tag";
import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "./useBooking";
import Spinner from "../../components/ui/Spinner";
import Button from "../../components/ui/Button";
import BookingBox from "./BookingBox";
import {
  BookingBox as BookingBoxType,
  StatusKey,
} from "../../types/booking.interface";
import { statusMap } from "../../utils/convertPersian";
import { useLocation } from "react-router-dom";

const BookingDetail: React.FC = () => {
  const { booking, isLoading } = useBooking();
  const moveBack = useMoveBack();
  const location = useLocation();
  console.log(location);

  if (isLoading) return <Spinner />;

  const { cabinId, status } = booking;

  const bookingBox: BookingBoxType = {
    created_at: booking.created_at,
    startDate: booking.startDate,
    endDate: booking.endDate,
    numNights: booking.numNights,
    numGuests: booking.numGuests,
    cabinPrice: booking.cabinPrice,
    extrasPrice: booking.extrasPrice,
    totalPrice: booking.totalPrice,
    hasBreakfast: booking.hasBreakfast,
    observations: booking.observations,
    isPaid: booking.isPaid,
    guests: {
      fullName: booking.guests.fullName,
      email: booking.guests.email,
      countryFlag: booking.guests.countryFlag,
      nationalID: booking.guests.nationalID,
      nationality: booking.guests.nationality || "",
    },
    cabin: {
      name: booking.cabins.name,
    },
  };
  const statusPersian = statusMap[status as StatusKey];
  return (
    <div key={location.key}>
      <Row className="my-5">
        <div className="flex items-center gap-4">
          <Heading as="h2">رزرو #{cabinId}</Heading>
          <Tag className="px-5" color={statusPersian.color}>
            {statusPersian.value}
          </Tag>
        </div>
        <Button variant="ghost" onClick={moveBack}>
          <HiArrowLongRight />
          برگشت
        </Button>
      </Row>
      {/* <Suspense fallback={<Spinner />}>
        <BookingBox booking={bookingBox} />
      </Suspense> */}
      <BookingBox booking={bookingBox} />
    </div>
  );
};

export default BookingDetail;
