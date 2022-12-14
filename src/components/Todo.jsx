import React from "react";

const Todo = ({ todo, onTodoRemove }) => {
  const handleRemove = () => {
    onTodoRemove(todo.id);
  };
  return (
    <div>
      <h1>{todo.title}</h1>
      <button onClick={handleRemove}>remove</button>
    </div>
  );
};

export default Todo;
