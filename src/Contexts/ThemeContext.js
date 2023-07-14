import { createContext, useState } from "react";
import Theme from "../Components/Navbar/Theme";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeStyle =Theme[theme]
  console.log(themeStyle)

  return <ThemeContext.Provider value={{ theme, toggleTheme, themeStyle}}>{children} </ThemeContext.Provider>;
};
