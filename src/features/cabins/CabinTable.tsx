import { useSearchParams } from "react-router-dom";
import Spinner from "../../components/ui/Spinner";
import Table from "../../components/ui/Table";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import { Cabin } from "../../types/cabin.interface";

const headerData = ["عکس", "نام سوییت", "ظرفیت", "قیمت", "تخفیف", ""];

const CabinTable: React.FC = () => {
  const { cabins, error, isLoading } = useCabins();
  const [searchParams] = useSearchParams();

  // FILTER
  const filterUrl = searchParams.get("discount") || "all";
  let cabinsFilter;
  if (filterUrl === "all") cabinsFilter = cabins;

  if (filterUrl === "discount") {
    cabinsFilter = cabins?.filter((cabin) => cabin.discount > 0);
  }

  if (filterUrl === "no-discount") {
    cabinsFilter = cabins?.filter((cabin) => cabin.discount === 0);
  }

  // SORT
  const sortUrl = searchParams.get("sortBy") || "startDate-asc";

  const [field, direction] = sortUrl.split("-");
  const modifier = direction === "asc" ? 1 : -1;

  let sortedCabins;
  if (cabins) {
    sortedCabins = cabinsFilter?.sort((a, b) => {
      const fieldName = field as keyof Cabin;
      return (a[fieldName] > b[fieldName] ? 1 : -1) * modifier;
    });
  }
  if (isLoading) return <Spinner variant="primary" />;
  return (
    <Table headerData={headerData}>
      {sortedCabins?.map((cabin, i) => (
        <tr key={`key-${i}`}>
          <CabinRow {...cabin} />
        </tr>
      ))}
    </Table>
  );
};

export default CabinTable;
