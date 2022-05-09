import React from "react";

const Todo = ({ todos, setTodos, todo }) => {
  const deleteHandler = () => {
    //filter the array of todos in state (create a new array with conditions)
    //all elements which do not have the same id as the current todo id, will remain
    //therefore, the one with the current id, will not be added to current state
    //therefore will be deleted

    //filtering, and checking each element using an arrow function
    setTodos(todos.filter((item) => item.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      //map (go over) each item
      todos.map((item) => {
        //if the item id is the same as the current todo id
        if (item.id === todo.id) {
          //that means the user wants to complete it, so...
          return {
            //return a new object, with everything that the old object had,
            //except, change the value of completed to the opposite of current
            ...item,
            //returning a !condition, means that it returns the opposite condition
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <p className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </p>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
