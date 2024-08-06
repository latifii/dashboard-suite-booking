import { ReactNode } from "react";

export type TableProps = {
  columns: string;
  children?: ReactNode;
};

export type TableBodyProps<T> = {
  data: T[] | undefined;
  render: (item: T) => React.ReactNode;
};
