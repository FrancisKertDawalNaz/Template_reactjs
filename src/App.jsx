import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (item) => setTodos([...todos, item]);
  const deleteTodo = (index) => setTodos(todos.filter((_, i) => i !== index));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // horizontal center
        justifyContent: "center", // vertical center
        padding: "20px",
      }}
    >
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "30px",
        }}
      >
        <FaTasks size={24} color="#4CAF50" /> Todo List
      </h1>

      <div style={{ width: "100%", maxWidth: "400px" }}>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
