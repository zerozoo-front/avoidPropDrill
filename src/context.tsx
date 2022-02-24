import { createContext } from "react";
const ThemeContext = createContext({
  theme: "light" as string | "light" | "dark",
  setTheme: (()=>{}) as any
});
export default ThemeContext;