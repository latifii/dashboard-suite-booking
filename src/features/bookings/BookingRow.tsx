import { HiDocumentDuplicate, HiEye } from "react-icons/hi2";
import Button from "../../components/ui/Button";
import { BookingShow } from "../../types/booking.interface";
import Tag from "../../components/ui/Tag";
import { Variant } from "../../types/variant.type";
import ButtonLink from "../../components/ui/ButtonLink";

type Color = Extract<Variant, "success" | "info" | "error">;

type BookingRowProps = {
  booking: BookingShow;
};

type StatusKey = "checked-in" | "checked-out" | "unconfirmed";

const statusMap: Record<StatusKey, { value: string; color: Color }> = {
  "checked-in": { value: "تایید شده", color: "success" },
  "checked-out": { value: "بررسی", color: "info" },
  unconfirmed: { value: "تایید نشده", color: "error" },
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
        <Button size="tiny" variant="ghost">
          <HiDocumentDuplicate className="text-lg" />
        </Button>
        <ButtonLink to={`/bookings/${bookingId}`} size="tiny" variant="ghost">
          <HiEye className="text-lg" />
        </ButtonLink>
      </td>
    </>
  );
};

export default BookingRow;
