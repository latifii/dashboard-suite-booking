import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import { Option } from "./types/select.types";

type FilterProps = {
  filterField: string;
  options: Option[];
};
const Filter: React.FC<FilterProps> = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0)?.value;

  function handleFilter(value: string) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-1 rounded border bg-white p-1 dark:bg-base-50">
      {options.map((option) => (
        <Button
          variant={currentFilter === option.value ? "primary" : "ghost"}
          key={option.value}
          size="small"
          onClick={() => handleFilter(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default Filter;
