import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo List</h1>

      <hr />

      <TodoList />

      <AddTodoForm />
    </div>
  );
};

export default App;
