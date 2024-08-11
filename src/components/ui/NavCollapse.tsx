import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Avatar from "./Avatar";
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";
import ButtonLink from "./ButtonLink";

type NavCollapseProps = {
  name?: string;
};

const NavCollapse: React.FC<NavCollapseProps> = ({ name }) => {
  const [toggle, setToggle] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function handleClickOutside(e: MouseEvent | TouchEvent) {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setToggle(false);
    }
  }

  useEffect(function () {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={ref}>
      <Button variant="ghost" onClick={() => setToggle(!toggle)}>
        <Avatar />
        <span>{name}</span>
        {toggle ? <HiMiniChevronUp /> : <HiMiniChevronDown />}
      </Button>

      {toggle && (
        <div className="absolute -right-2 top-full mt-3 h-auto w-52 rounded border border-base-10 bg-white px-1 py-3 shadow dark:border-base-25 dark:bg-base-75">
          <ButtonLink size="small" shape="full" direction="right" to="/users">
            حساب کاربری
          </ButtonLink>
          <ButtonLink
            size="small"
            shape="full"
            direction="right"
            to="/settings"
          >
            تنظیمات
          </ButtonLink>
          <ButtonLink
            size="small"
            shape="full"
            direction="right"
            to="/dashboard"
          >
            خروج
          </ButtonLink>
        </div>
      )}
    </div>
  );
};

export default NavCollapse;
