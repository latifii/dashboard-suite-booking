import { HiXMark } from "react-icons/hi2";
import Logo from "../ui/Logo";
import MainNav from "../ui/MainNav";
import { SidebarProps } from "./types/sidebar.types";

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-30 w-3/4 bg-white px-3 py-4 shadow transition-transform duration-300 ease-in-out lg:relative lg:col-span-1 lg:w-auto lg:translate-x-0 dark:bg-base-75 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <span
        className="absolute left-0 top-1 p-4 lg:hidden"
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
