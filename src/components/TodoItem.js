import React from "react";

const TodoItem = (props) => {
  const getStyle = () => {
    let textDecoration = "";
    if (props.todo.completed) {
      textDecoration = "line-through";
    } else {
      textDecoration = "none";
    }

    return {
      flexGrow: "1",
      textDecoration: textDecoration,
    };
  };

  const wrapperStyle = {
    display: "flex",
    alignItems: "center",
    border: "2px solid #f4f4f4",
    padding: "12px",
    fontSize: "24px",
  };

  const buttonStyle = {
    backgroundColor: "#BB0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={wrapperStyle}>
      <input
        type="checkbox"
        // onChange={() => props.toggleCompleted()}
        // ...todo ini berada pada Todos yaitu parameter pada method map, yang mana berfungsi untuk membaca semua data id
        onChange={() => props.toggleCompleted(props.todo.id)}
      />
      {/* <p>{props.todo.title}</p> */}
      <p style={getStyle()}>{props.todo.title}</p>
      <button style={buttonStyle}>x</button>
    </div>
  );
};

export default TodoItem;
