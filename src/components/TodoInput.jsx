

import { useState, useContext } from "react";
import { TodoContext } from "../AppProviders";
function TodoInput() {
  const [input, setInput] = useState("");
  const { addTodo } = useContext(TodoContext);
  function handleAddTodo() {
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  }
  return (
    <>
      <input
        type="text"
        value={input}
        placeholder="What needs to be done?"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  );
}
export default TodoInput;