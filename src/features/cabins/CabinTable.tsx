import Spinner from "../../components/ui/Spinner";
import Table from "../../components/ui/Table";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";

const headerData = ["عکس", "نام سوییت", "ظرفیت", "قیمت", "تخفیف", ""];

const CabinTable: React.FC = () => {
  const { cabins, error, isLoading } = useCabins();
  if (isLoading) return <Spinner variant="primary" />;
  return (
    <Table headerData={headerData}>
      {cabins?.map((cabin, i) => (
        <tr key={`key-${i}`}>
          <CabinRow {...cabin} />
        </tr>
      ))}
    </Table>
  );
};

export default CabinTable;
