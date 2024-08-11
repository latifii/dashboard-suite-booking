import { ReactNode } from "react";

type TableProps = {
  headerData: string[];
  children: ReactNode;
};

const Table: React.FC<TableProps> = ({ headerData, children }) => {
  return (
    <div className="mb-8 w-full overflow-hidden rounded-lg border border-muted-50 shadow-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-md border-b border-muted-100 bg-base-10 text-left font-semibold tracking-wide dark:bg-base-75">
              {headerData.map((item, index) => {
                return (
                  <th
                    className="px-4 py-3 text-right"
                    key={`key-${item}${index}`}
                  >
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-base-50">{children}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
