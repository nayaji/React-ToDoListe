import { useState, useEffect } from "react";
import "./TodoApp.css"; // Importation du fichier CSS

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : ["Learn React", "Be Awesome!"];
  });

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setNewTodo("");
    }
  };

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="todo-container">
      <h1>My Todo App</h1>
      <input
        type="text"
        placeholder="Type a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
      />
      <button onClick={addTodo} className="add-btn">
        Add Todo
      </button>
      <h3>Todos</h3>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input type="checkbox" />
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}
