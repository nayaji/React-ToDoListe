import { useState, useEffect } from "react";
import "./TodoApp.css"; // Importation du fichier CSS

export default function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setNewTodo("");
    }
  };

    // Fonction pour supprimer une tâche spécifique
    const deleteTodo = (index) => {
      const updatedTodos = todos.filter((todo, todoIndex) => todoIndex !== index);
      setTodos(updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    };

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="todo-container">
      <h1>Nayaji - ToDoApp</h1>
      <input
        type="text"
        placeholder="Type a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="todo-input"
      />
      <button onClick={addTodo} className="add-btn">
        Add Tasks
      </button>
      <h3>Enregistrement des tâches dans "localStorage"</h3>
      <h3>- Ouvrez votre "inspector", Application, Storage, Local storage</h3>
      <h3>- vous pourrez supprimer les tâches à la main et ensuite refresh</h3>
      <h3>___________</h3>
      <h3>ToDoListe</h3>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <input type="checkbox" />
            {todo}
            <button 
              onClick={() => deleteTodo(index)} 
              style={{
                marginLeft: "10px", 
                backgroundColor: "red", 
                color: "white", 
                border: "none", 
                borderRadius: "4px", 
                padding: "5px 10px", 
                cursor: "pointer"
              }}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
