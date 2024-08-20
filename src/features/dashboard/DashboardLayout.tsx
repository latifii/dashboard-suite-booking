import Spinner from "../../components/ui/Spinner";
import { useCabins } from "../cabins/useCabins";
import Stats from "./Stats";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";

const DashboardLayout: React.FC = () => {
  const { bookings, isLoading: isLoading1 } = useRecentBookings();
  const {
    stays,
    confirmedStays,
    numDays,
    isLoading: isLoading2,
  } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <div className="grid grid-cols-4 grid-rows-[auto_34rem_auto] gap-6">
      <Stats
        bookings={bookings || []}
        numDays={numDays}
        confirmedStays={confirmedStays || []}
        cabinCount={cabins?.length || 0}
      />
    </div>
  );
};

export default DashboardLayout;
