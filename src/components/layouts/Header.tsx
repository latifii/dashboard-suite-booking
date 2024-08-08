import { HiBars3 } from "react-icons/hi2";
import { SidebarProps } from "./types/sidebar.types";
import Avatar from "../ui/Avatar";

type HeaderProps = Pick<SidebarProps, "setIsOpen">;
const Header: React.FC<HeaderProps> = ({ setIsOpen }) => {
  return (
    <div className=" flex border-b bg-white border-gray-400 p-3 m-0 lg:m-3 lg:mb-5 lg:rounded lg:border-0">
      <div className="lg:hidden" onClick={() => setIsOpen(true)}>
        <HiBars3 className="text-3xl" />
      </div>
      <Avatar className="ms-auto " />
    </div>
  );
};
export default Header;
