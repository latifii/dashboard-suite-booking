import Filter from "../../components/ui/Filter";
import SortBy from "../../components/ui/SortBy";

const CabinFlter: React.FC = () => {
  return (
    <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center">
      <Filter
        filterField="discount"
        options={[
          { label: "همه", value: "all" },
          { label: "با تخفیف", value: "discount" },
          { label: "بدون تخفیف", value: "no-discount" },
        ]}
      />
      <SortBy
        options={[
          { label: "حروف الفبا (اول)", value: "name-asc" },
          { label: "حروف الفبا (آخر)", value: "name-desc" },
          { label: "کمترین قیمت", value: "regularPrice-asc" },
          { label: "بیشترین قیمت", value: "regularPrice-desc" },
          { label: "کمترین ظرفیت", value: "maxCapacity-asc" },
          { label: "بیشترین ظرفیت", value: "maxCapacity-desc" },
        ]}
      />
    </div>
  );
};

export default CabinFlter;
