//default imports
import React, { useState, useEffect } from "react";
import "./App.css";

//component imports
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //states
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filtered, setFiltered] = useState([]);

  //functions
  const filterHandler = () => {
    if (filter === "completed") {
      setFiltered(todos.filter((todo) => todo.completed === true));
    } else if (filter === "uncompleted") {
      setFiltered(todos.filter((todo) => todo.completed === false));
    } else {
      setFiltered(todos);
    }
  };

  const saveLocalTodos = () =>
    localStorage.setItem("todos", JSON.stringify(todos));

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  //effects
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    //do this effect every time the below condition is changed
    //each time the todos or filter changes, call the filter handler
  }, [todos, filter]);

  return (
    <div className="app">
      <Header />
      <Form
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        setFilter={setFilter}
      />
      <TodoList todos={todos} setTodos={setTodos} filtered={filtered} />
    </div>
  );
}

export default App;
