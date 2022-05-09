import React from "react";

//import components
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filtered }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((todo) => (
          <li key={todo.id}>
            <Todo todos={filtered} setTodos={setTodos} todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
