import { useContext } from "react";
import ThemeContext from "./context";
const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      return;
    }
    setTheme("dark");
    return;
  };
  return (
    <header>
      <h1> Tv Shows </h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};
export default Header;
