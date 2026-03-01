import "./App.css";
import AppProviders from "./AppProviders";
import FilterButtons from "./components/FilterButtons";
import ThemeToggleButton from "./components/ThemeToggleButton";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import { useContext } from "react";
import { ThemeContext } from "./AppProviders";

function App() {

   const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    border: theme === "light" ? "1px solid black" : "1px solid white",
    width: "500px", height: "400px", textAlign: "center", padding:"30px", margin: "auto", borderRadius: "10px"
  };

  return (
    <div style={style}>
      <div style={{display: "flex" , gap:"50px", alignItems: "center"}}>
        <h1>Todo App (Context API)</h1>
        <ThemeToggleButton />
        
        </div>
        <TodoInput />
        <FilterButtons />
        <TodoList />
      
    </div>
  );
}

export default App;
