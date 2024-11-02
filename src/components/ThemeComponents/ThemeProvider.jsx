import { useState } from "react";
import themes from "../../styles/themes";
import { useMemo } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(themes.DEFAULT);

  const changeTheme = (newTheme) =>
    setCurrentTheme(themes[newTheme] || themes.DEFAULT);

  const memoizedData = useMemo(
    () => ({
      theme: currentTheme,
      changeTheme,
    }),
    [currentTheme]
  );

  return (
    <ThemeContext.Provider value={memoizedData}>
      {children}
    </ThemeContext.Provider>
  );
}
