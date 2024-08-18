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
import ButtonLink from "../../components/ui/ButtonLink";
import { useDeleteBooking } from "./useDeleteBooking";
import Modal from "../../components/ui/Modal";
import ConfirmDelete from "../../components/ui/ConfirmDelete";
import { deleteBooking } from "../../services/apiBookings";

const BookingDetail: React.FC = () => {
  const { booking, isLoading } = useBooking();
  const { isDeletingBooking, mutateBookingDelete } = useDeleteBooking();
  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

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
  const statusPersian = statusMap[status as StatusKey];
  return (
    <>
      <Row className="my-5">
        <div className="flex items-center gap-4">
          <Heading as="h2">رزرو #{bookingId}</Heading>
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

      <div className="my-5 flex items-center gap-5">
        <Button variant="ghost" onClick={moveBack}>
          برگشت
        </Button>

        {status === "unconfirmed" && (
          <ButtonLink variant="primary" to={`/checkin/${bookingId}`}>
            بررسی فاکتور #{bookingId}
          </ButtonLink>
        )}
        {status === "checked-in" && (
          <ButtonLink variant="success" to={`/`}>
            تایید فاکتور
          </ButtonLink>
        )}
        <Modal>
          <Modal.Open opens="delete-booking">
            <Button variant="error" onClick={moveBack}>
              حذف
            </Button>
          </Modal.Open>
          <Modal.Window name="delete-booking">
            <ConfirmDelete
              resourceName="رزرو"
              disabled={isDeletingBooking}
              onConfirm={() =>
                mutateBookingDelete(bookingId, {
                  onSettled: () => moveBack(),
                })
              }
            />
          </Modal.Window>
        </Modal>
      </div>
    </>
  );
};

export default BookingDetail;
