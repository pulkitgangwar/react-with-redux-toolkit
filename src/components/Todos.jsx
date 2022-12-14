import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, todosActions } from "../store/todos";

const Todos = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(todosActions.remove(id));
  };

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.title}</h3>
          <button
            onClick={() => {
              handleRemove(todo.id);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
