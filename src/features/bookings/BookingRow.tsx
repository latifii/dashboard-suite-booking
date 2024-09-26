import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import Button from "../../components/ui/Button";
import { BookingShow, StatusKey } from "../../types/booking.interface";
import Tag from "../../components/ui/Tag";
import ButtonLink from "../../components/ui/ButtonLink";
import { statusMap } from "../../utils/convertPersian";
import { useCheckout } from "../check-in-out/useCheckout";
import Modal from "../../components/ui/Modal";
import ConfirmDelete from "../../components/ui/ConfirmDelete";
import { useDeleteBooking } from "./useDeleteBooking";
import { formatCurrency } from "../../utils/helpers";
import { toLocalDateString } from "../../utils/persianDate";

type BookingRowProps = {
  booking: BookingShow;
};

const BookingRow: React.FC<BookingRowProps> = ({
  booking: {
    id: bookingId,
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    status,
    guests: { email, fullName: guestName },
    cabins: { name: cabinName },
  },
}) => {
  const statusPersian = statusMap[status as StatusKey];
  const { checkout, isCheckOuting } = useCheckout();
  const { isDeletingBooking, mutateBookingDelete } = useDeleteBooking();

  return (
    <>
      <td className="border px-4 py-2 font-bold">{cabinName}</td>
      <td className="border px-4 py-2">
        <span className="block font-bold"> {guestName}</span>
        <span className="text-sm font-thin">{email}</span>
      </td>
      <td className="border px-4 py-2">
        <span className="block font-bold">{toLocalDateString(startDate)}</span>
        <span className="text-sm font-thin">{toLocalDateString(endDate)}</span>
      </td>
      <td className="border px-4 py-2">
        <Tag color={statusPersian.color}>{statusPersian.value}</Tag>
      </td>
      <td className="border px-4 py-2">{formatCurrency(totalPrice)}</td>
      <td className="border px-4 py-2">
        <ButtonLink to={`/bookings/${bookingId}`} size="tiny" variant="ghost">
          <HiEye className="text-lg" />
        </ButtonLink>
        {status === "unconfirmed" && (
          <ButtonLink to={`/checkin/${bookingId}`} size="tiny" variant="ghost">
            <HiArrowDownOnSquare className="text-lg" />
          </ButtonLink>
        )}
        {status === "checked-in" && (
          <Button
            size="tiny"
            variant="ghost"
            disabled={isCheckOuting}
            onClick={() => checkout(bookingId)}
          >
            <HiArrowUpOnSquare className="text-lg" />
          </Button>
        )}
        <Modal>
          <Modal.Open opens="delete-booking">
            <Button
              size="tiny"
              variant="ghost"
              // disabled={}
            >
              <HiTrash className="text-lg" />
            </Button>
          </Modal.Open>
          <Modal.Window name="delete-booking">
            <ConfirmDelete
              onConfirm={() => mutateBookingDelete(bookingId)}
              disabled={isDeletingBooking}
              resourceName="رزرو"
            />
          </Modal.Window>
        </Modal>
      </td>
    </>
  );
};

export default BookingRow;
