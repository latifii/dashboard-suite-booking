import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center justify-center gap-3 text-lg font-bold"
    >
      <img src={logo} className="h-16 w-16" />
      گیلند ملک
    </Link>
  );
}
export default Logo;
