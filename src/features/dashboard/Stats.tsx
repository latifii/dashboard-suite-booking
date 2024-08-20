import { HiOutlineBriefcase } from "react-icons/hi2";
import Stat from "./Stat";
import { Booking } from "../../types/booking.interface";
import { formatCurrency } from "../../utils/helpers";

type Guests = {
  fullName: string;
};

type BookingStat = Booking & { guests: Guests };

type StatsProps = {
  bookings: Pick<Booking, "created_at" | "extrasPrice" | "totalPrice">[];
  cabinCount: number;
  numDays: number;
  confirmedStays: BookingStat[];
};

const Stats: React.FC<StatsProps> = ({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) => {
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  return (
    <>
      <Stat
        title="رزرو"
        variant="primary"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="فروش"
        variant="success"
        icon={<HiOutlineBriefcase />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="اعلام حضور"
        variant="info"
        icon={<HiOutlineBriefcase />}
        value={checkins}
      />
      <Stat
        title="ظریب سفارش"
        variant="warning"
        icon={<HiOutlineBriefcase />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
};

export default Stats;
