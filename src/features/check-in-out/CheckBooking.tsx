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
import { useSettings } from "../settings/useSettings";
import { formatCurrency } from "../../utils/helpers";

const CheckBooking: React.FC = () => {
  const [confirmPaid, setConfirmPaid] = useState<boolean>(false);
  const [addBreakfast, setAddBreakfast] = useState<boolean>(false);

  const { booking, isLoading } = useBooking();
  const { checkin, isCheckingIn } = useCheckin();
  const { settings: settingData, isLoading: isSetting } = useSettings();
  const moveBack = useMoveBack();

  useEffect(
    function () {
      if (booking) {
        setConfirmPaid(booking.isPaid ?? false);
      }
    },
    [booking],
  );

  if (isLoading || isSetting) return <Spinner />;

  const { id: bookingId, status } = booking;

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

  const breakfastPrice =
    settingData?.breakfastPrice * bookingBox.numGuests * bookingBox.numNights;

  const statusPersian = statusMap[status as StatusKey];

  function handleChekin() {
    if (!confirmPaid) return;
    if (addBreakfast) {
      checkin({
        bookingId,
        obj: {
          hasBreakfast: true,
          extrasPrice: breakfastPrice,
          totalPrice: bookingBox.totalPrice + breakfastPrice,
        },
      });
    } else {
      checkin({ bookingId, obj: {} });
    }
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
      {!bookingBox.hasBreakfast && (
        <CheckBox
          className="my-5"
          id="addBreakfast"
          checked={addBreakfast}
          onChange={() => {
            setAddBreakfast(!addBreakfast);
            setConfirmPaid(false);
          }}
        >
          آیا میخواهید صبحانه را با {formatCurrency(breakfastPrice)} دلار اضافه
          کنید؟
        </CheckBox>
      )}

      <CheckBox
        className="my-5"
        id="confirm"
        checked={confirmPaid}
        onChange={() => setConfirmPaid((confirm) => !confirm)}
        disabled={confirmPaid || isCheckingIn}
      >
        من تأیید می کنم که {bookingBox.guests.fullName} کل مبلغ را پرداخت کرده
        است. مبلغ{" "}
        {addBreakfast
          ? formatCurrency(breakfastPrice + bookingBox.cabinPrice)
          : formatCurrency(bookingBox.totalPrice)}
        {addBreakfast &&
          `(${formatCurrency(bookingBox.cabinPrice)} +
             ${formatCurrency(breakfastPrice)})`}
      </CheckBox>

      <div className="my-5 flex items-center gap-5">
        <Button variant="ghost" onClick={moveBack}>
          برگشت
        </Button>

        <Button
          variant="primary"
          isDisabled={!confirmPaid || isCheckingIn}
          onClick={handleChekin}
        >
          تایید فاکتور #{bookingId}
        </Button>
      </div>
    </>
  );
};

export default CheckBooking;
