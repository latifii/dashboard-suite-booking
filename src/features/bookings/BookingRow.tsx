import {
  HiArrowDownOnSquare,
  HiDocumentDuplicate,
  HiEye,
} from "react-icons/hi2";
import Button from "../../components/ui/Button";
import {
  BookingShow,
  ColorStatus,
  StatusKey,
} from "../../types/booking.interface";
import Tag from "../../components/ui/Tag";
import ButtonLink from "../../components/ui/ButtonLink";
import { statusMap } from "../../utils/convertPersian";

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

  return (
    <>
      <td className="border px-4 py-2 font-bold">{cabinName}</td>
      <td className="border px-4 py-2">
        <span className="block font-bold"> {guestName}</span>
        <span className="text-sm font-thin">{email}</span>
      </td>
      <td className="border px-4 py-2">
        <span className="block font-bold">{startDate}</span>
        <span className="text-sm font-thin">{endDate}</span>
      </td>
      <td className="border px-4 py-2">
        <Tag color={statusPersian.color}>{statusPersian.value}</Tag>
      </td>
      <td className="border px-4 py-2">{totalPrice}</td>
      <td className="border px-4 py-2">
        <ButtonLink to={`/bookings/${bookingId}`} size="tiny" variant="ghost">
          <HiEye className="text-lg" />
        </ButtonLink>
        {status === "unconfirmed" && (
          <ButtonLink to={`/checkin/${bookingId}`} size="tiny" variant="ghost">
            <HiArrowDownOnSquare className="text-lg" />
          </ButtonLink>
        )}
      </td>
    </>
  );
};

export default BookingRow;
