import { useContext } from "react";
import { ThemeContext } from "../AppProviders";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "black" : "yellow",
    color: theme === "light" ? "white" : "black",
    border: theme === "light" ? "1px solid black" : "1px solid white",
    width:"150px", height:"70px", borderRadius:"5px"
  };

  return (
    <>
      <button style={style} onClick={toggleTheme}>
        {theme === "light" ? "🌙 Switch to Dark" : "☀️ Switch to Light"}
      </button>
    </>
  );
}

export default ThemeToggleButton;
