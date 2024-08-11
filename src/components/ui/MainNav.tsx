import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

import ButtonLink from "./ButtonLink";
import { useLocation } from "react-router-dom";

const navData = [
  {
    id: 1,
    name: "داشبورد",
    to: "/dashboard",
    icon: <HiOutlineHome />,
  },
  {
    id: 2,
    name: "رزرو ها",
    to: "/bookings",
    icon: <HiOutlineCalendarDays />,
  },
  {
    id: 3,
    name: "سوییت ها",
    to: "/cabins",
    icon: <HiOutlineHomeModern />,
  },
  {
    id: 4,
    name: "کاربران",
    to: "/users",
    icon: <HiOutlineUsers />,
  },
  {
    id: 5,
    name: "تنظیمات",
    to: "/settings",
    icon: <HiOutlineCog6Tooth />,
  },
];

function MainNav() {
  const { pathname } = useLocation();

  return (
    <>
      <ul>
        {navData.map((item) => {
          const isSelect = pathname === item.to ? "gradient" : "ghost";
          return (
            <li key={item.id} className="mb-1">
              <ButtonLink
                to={item.to}
                direction="right"
                shape="full"
                variant={isSelect}
              >
                <span
                  className={`text-xl ${pathname === item.to ? "" : "opacity-90"}`}
                >
                  {item.icon}
                </span>
                <span
                  className={` ${pathname === item.to ? "" : "opacity-90"}`}
                >
                  {item.name}
                </span>
              </ButtonLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default MainNav;
