import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, ...newTodo]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo List</h1>
      <hr />
      <TodoList todoList={todoList} />

      <AddTodoForm onAddTodo={addTodo} />
    </div>
  );
};

export default App;
