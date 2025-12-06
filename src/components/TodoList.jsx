export default function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ marginBottom: "10px" }}>
          {todo}
          <button 
            onClick={() => deleteTodo(index)}
            style={{
              marginLeft: "10px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "4px 8px",
              cursor: "pointer"
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
