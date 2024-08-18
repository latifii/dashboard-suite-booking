import Filter from "../../components/ui/Filter";
import SortBy from "../../components/ui/SortBy";

const BookingFilter: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
      <Filter
        filterField="status"
        options={[
          { label: "همه", value: "all" },
          { label: "ورود مهمان", value: "checked-in" },
          { label: "خروج مهمان", value: "checked-out" },
          { label: "تایید نشده", value: "unconfirmed" },
        ]}
      />
      <SortBy
        options={[
          { label: "براساس تاریخ (جدید)", value: "startDate-asc" },
          { label: "براساس تاریخ (قدیمی)", value: "startDate-desc" },
          { label: "کمترین مبلغ", value: "totalPrice-asc" },
          { label: "بیشترین مبلغ", value: "totalPrice-desc" },
        ]}
      />
    </div>
  );
};

export default BookingFilter;
