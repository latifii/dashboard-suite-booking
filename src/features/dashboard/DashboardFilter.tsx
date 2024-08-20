import Filter from "../../components/ui/Filter";

const DashboardFilter: React.FC = () => {
  return (
    <Filter
      filterField="last"
      options={[
        { value: "7", label: "7 روز اخیر" },
        { value: "30", label: "30 روز اخیر" },
        { value: "90", label: "90 روز اخیر" },
      ]}
    />
  );
};

export default DashboardFilter;
