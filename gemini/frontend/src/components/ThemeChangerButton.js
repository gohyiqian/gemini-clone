import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

const ThemeChangerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <button className={`ThemeChangerButton ${theme}`} onClick={handleClick}>
      Dark / Light
    </button>
  );
};

export default ThemeChangerButton;
