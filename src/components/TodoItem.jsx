import { useContext, useState } from "react";
import { TodoContext } from "../AppProviders";

function TodoItem({ item }) {
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  // start editing
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // save edit
  const handleSave = () => {
    if (editText.trim() !== "") {
      editTodo(item.id, editText.trim());
    }
    setIsEditing(false);
  };

  // save on Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <ul style={{ listStyle: "none" }}>
      <li style={{ display: "flex", gap: "30px", alignItems: "center" }}>

        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleTodo(item.id)}
        />

        {/* show input when editing */}
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span>{item.text}</span>
        )}

        {/* edit button */}
        <button onClick={handleEditClick}>✏️</button>

        {/* delete button */}
        <button onClick={() => deleteTodo(item.id)}>🗑️</button>

      </li>
    </ul>
  );
}

export default TodoItem;