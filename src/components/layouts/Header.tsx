import { HiBars3 } from "react-icons/hi2";
import { SidebarProps } from "./types/sidebar.types";

import ThemeSwicher from "../ui/ThemeSwicher";

import NavCollapse from "../ui/NavCollapse";

type HeaderProps = Pick<SidebarProps, "setIsOpen">;
const Header: React.FC<HeaderProps> = ({ setIsOpen }) => {
  return (
    <div className="border-gray-400 m-0 flex justify-between border-b bg-white p-3 shadow dark:bg-base-75 lg:m-3 lg:mb-5 lg:justify-end lg:rounded lg:border-0">
      <div className="lg:hidden" onClick={() => setIsOpen(true)}>
        <HiBars3 className="text-3xl dark:text-white" />
      </div>
      <div className="flex items-center justify-end gap-2">
        <ThemeSwicher />
        <NavCollapse />
      </div>
    </div>
  );
};
export default Header;
