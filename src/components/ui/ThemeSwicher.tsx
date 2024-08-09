import { HiMoon, HiSun } from "react-icons/hi2";
import Button from "./Button";
import { useTheme } from "../../context/ThemeContext";

function ThemeSwicher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button size="small" shape="square" variant="ghost" onClick={toggleTheme}>
      {theme === "dark" ? (
        <HiSun className="g text-2xl" />
      ) : (
        <HiMoon className="text-word text-xl" />
      )}
    </Button>
  );
}
export default ThemeSwicher;
