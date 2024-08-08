import { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};
const Main: React.FC<MainProps> = ({ children }) => {
  return <div className="flex-1 overflow-y-auto">{children}</div>;
};
export default Main;
