import { useSearchParams } from "react-router-dom";
import Select from "./Select";
import { Option } from "./types/select.types";
import { ChangeEvent } from "react";

type SortyByProps = {
  options: Option[];
};
const SortBy: React.FC<SortyByProps> = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    searchParams.set("sortBy", e.target?.value);
    setSearchParams(searchParams);
  }

  return <Select options={options} value={sortBy} onChange={handleChange} />;
};

export default SortBy;
