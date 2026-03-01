import { createContext, useState, useEffect } from "react";

export const TodoContext = createContext(null);
export const ThemeContext = createContext(null);
export const FilterContext = createContext(null);

function AppProviders({ children }) {

  const [todo, setTodo] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [theme, setTheme] = useState("light");

  const [filter, setFilter] = useState("all");

  console.log(todo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  //Todo functions
  const addTodo = (input) => {
    const newTodo = { id: Date.now(), text: input, completed: false };
    setTodo((prev) => [...prev, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodo((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodo((prev) =>
      prev.map((item) => (item.id === id ? { ...item, text: newText } : item)),
    );
  };

  const clearCompleted = () => {
    setTodo((prev) => prev.filter((item) => !item.completed));
  };

  //Theme functions

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  //Filter functions

  const filterTodo = (filterType) => setFilter(filterType);

  return (
    // Step 2: Provide the context (add a value prop)
    <TodoContext.Provider
      value={{ todo,addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted }}
    >
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <FilterContext.Provider value={{filter, filterTodo}}>
        {children}
        </FilterContext.Provider>
      </ThemeContext.Provider>
    </TodoContext.Provider>
  );
}
export default AppProviders;
