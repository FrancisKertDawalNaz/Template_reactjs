import { useState } from "react";

export default function TodoInput({ addTodo }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input 
        type="text" 
        placeholder="Add new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
      />
      <button type="submit" style={{ padding: "10px 20px", borderRadius: "8px", backgroundColor:"#4CAF50", color:"white", border:"none", cursor:"pointer" }}>
        Add
      </button>
    </form>
  );
}
