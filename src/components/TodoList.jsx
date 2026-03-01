import { useContext } from "react";
import { FilterContext, TodoContext } from "../AppProviders";
import TodoItem from "./TodoItem";

function TodoList() {
  const { filter } = useContext(FilterContext);
  const { todo, clearCompleted } = useContext(TodoContext);

  // filter todos
  const filteredTodos = todo.filter((item) => {
    if (filter === "active") return !item.completed;
    if (filter === "completed") return item.completed;
    return true;
  });

  // map filtered todos
  const todoElement = filteredTodos.map((item) => (
    <TodoItem key={item.id} item={item} />
  ));

  // counts
  const activeCount = todo.filter((item) => !item.completed).length;
  const completedCount = todo.filter((item) => item.completed).length;

  return (
    <>
      {/* show message OR todos */}
      {todo.length === 0 && "No todos yet! Add one above."}

      {todo.length > 0 && filteredTodos.length === 0 && (
        filter === "active"
          ? "No active todos. Well done! 🎉"
          : "No completed todos yet"
      )}

      {filteredTodos.length > 0 && todoElement}

      <div style={{display:"flex", justifyContent: "space-evenly"}}>

      <div>
        <span >
          <strong>{activeCount}</strong> item left
        </span>
      </div>

      <div>
        {completedCount > 0 && (
          <button onClick={clearCompleted}>
            Clear Completed ({completedCount})
          </button>
        )}
      </div>
      </div>
    </>
  );
}

export default TodoList;