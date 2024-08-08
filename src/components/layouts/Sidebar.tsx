import { HiXMark } from "react-icons/hi2";
import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";
import { SidebarProps } from "./types/sidebar.types";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`lg:col-span-1 bg-white px-3 py-4 tra lg:relative fixed inset-y-0 right-0 w-3/4 z-30 transition-transform duration-300 ease-in-out lg:w-auto lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <span
        className="p-4 lg:hidden absolute left-0 top-1 "
        onClick={() => setIsOpen(false)}
      >
        <HiXMark className="text-xl" />
      </span>
      <Logo />
      <MainNav />
    </div>
  );
};
export default Sidebar;
