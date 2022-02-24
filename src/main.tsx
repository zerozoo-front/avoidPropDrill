import { useContext } from "react";
import ThemeContext from "./context";
const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main>
      <h2>
        {" "}
        {theme === "dark" ? "Dark theme enabled" : "Light theme enabled"}
      </h2>
    </main>
  );
};
export default Main;