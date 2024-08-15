import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import { PAGE_SIZE } from "../../utils/instances";

type PaginationProps = {
  count: number;
};

const Pagination: React.FC<PaginationProps> = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / PAGE_SIZE);

  function handleNext() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }

  function handlePrev() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;
  return (
    <div className="flex w-full items-center justify-between">
      <p className="ml-2 text-sm font-normal">
        نمایش
        <span className="px-2 font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}
        </span>
        تا
        <span className="px-2 font-semibold">
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>
        از <span className="px-1 font-semibold">{count}</span> نمایش
      </p>

      <div className="my-2 flex gap-2">
        <Button
          variant="ghost"
          size="small"
          className="flex items-center"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <HiChevronRight className="h-5 w-5" />
          <span>قبلی</span>
        </Button>

        <Button
          variant="ghost"
          size="small"
          onClick={handleNext}
          disabled={currentPage === pageCount}
        >
          <span>بعدی</span>
          <HiChevronLeft className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
