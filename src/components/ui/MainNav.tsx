import { HiOutlineCalendarDays, HiOutlineHome } from "react-icons/hi2";
import { Link } from "react-router-dom";

const navData = [
  {
    id: 1,
    name: "داشبورد",
    link: "/",
    icon: <HiOutlineHome />,
  },
  {
    id: 2,
    name: "رزرو ها",
    link: "/bookings",
    icon: <HiOutlineCalendarDays />,
  },
];

function MainNav() {
  return (
    <ul>
      {navData.map((item) => {
        return (
          <li key={item.id}>
            <Link to={item.link} className="flex items-center gap-2">
              <span>{item.name}</span>
              {item.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default MainNav;
