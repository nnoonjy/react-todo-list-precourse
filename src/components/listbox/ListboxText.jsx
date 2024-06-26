import "./listbox.css";

const listboxText = ({ todo }) => {
  return (
    <div
      className="list"
      style={{
        textDecoration: todo.checked ? "line-through" : "none",
        color: todo.checked ? "#D79F9F" : "#4d4d4d",
      }}
    >
      {todo.text}
    </div>
  );
};

export default listboxText;
