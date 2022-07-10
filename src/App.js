import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  const todoList = [
    {
      id: 0,
      title: "Eat 6 servings of vegetables",
    },
    {
      id: 1,
      title: "Drink 2 liters of water",
    },
    {
      id: 2,
      title: "Work out for 1 hour",
    },
  ];

  const [newTodo, setNewTodo] = useState("");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo List</h1>
      <hr />
      <TodoList list={todoList} />

      <AddTodoForm onAddTodo={setNewTodo} />

      <p>{newTodo}</p>
    </div>
  );
};

export default App;
