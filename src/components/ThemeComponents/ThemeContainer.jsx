import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemeContainer({
  styles = {},
  hasBorder = false,
  children,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        border: hasBorder ? `2px solid ${theme.border}` : "none",
        ...styles,
      }}
    >
      {children}
    </div>
  );
}
