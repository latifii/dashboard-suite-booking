import { HiArrowLongRight } from "react-icons/hi2";
import Heading from "../../components/ui/Heading";
import Row from "../../components/ui/Row";
import Tag from "../../components/ui/Tag";
import { useMoveBack } from "../../hooks/useMoveBack";
import Spinner from "../../components/ui/Spinner";
import Button from "../../components/ui/Button";
import {
  BookingBox as BookingBoxType,
  StatusKey,
} from "../../types/booking.interface";
import { statusMap } from "../../utils/convertPersian";
import { useBooking } from "../bookings/useBooking";
import BookingBox from "../bookings/BookingBox";
import { useEffect, useState } from "react";
import CheckBox from "../../components/ui/CheckBox";
import { useCheckin } from "./useCheckin";

const CheckBooking: React.FC = () => {
  const [confirmPaid, setConfirmPaid] = useState<boolean>(false);

  const { booking, isLoading } = useBooking();
  const { checkin, isCheckingIn } = useCheckin();
  const moveBack = useMoveBack();

  useEffect(
    function () {
      if (booking) {
        setConfirmPaid(booking.isPaid ?? false);
      }
    },
    [booking],
  );

  if (isLoading) return <Spinner />;

  const { id: bookingId, status } = booking;
  console.log(bookingId);

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

  function handleChekin(id: number) {
    checkin(id);
  }
  return (
    <>
      <Row className="my-5">
        <div className="flex items-center gap-4">
          <Heading as="h2">بررسی رزرو #{bookingId}</Heading>
          <Tag className="px-5" color={statusPersian.color}>
            {statusPersian.value}
          </Tag>
        </div>
        <Button variant="ghost" onClick={moveBack}>
          <HiArrowLongRight />
          برگشت
        </Button>
      </Row>

      <BookingBox booking={bookingBox} />

      <CheckBox
        className="my-5"
        id="confirm"
        checked={confirmPaid}
        onChange={() => setConfirmPaid((confirm) => !confirm)}
        disabled={confirmPaid || isCheckingIn}
      >
        من تأیید می کنم که {bookingBox.guests.fullName} کل مبلغ را پرداخت کرده
        است
      </CheckBox>

      <div className="my-5 flex items-center gap-5">
        <Button variant="ghost" onClick={moveBack}>
          برگشت
        </Button>

        <Button
          variant="primary"
          isDisabled={!confirmPaid || isCheckingIn}
          onClick={() => handleChekin(bookingId)}
        >
          تایید فاکتور #{bookingId}
        </Button>
      </div>
    </>
  );
};

export default CheckBooking;
