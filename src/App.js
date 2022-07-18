import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

const App = () => {
  const addTodo = (newTodo) => {
    setTodoList([...todoList, ...newTodo]);
  };

  const [todoList, setTodoList] = useSemiPersistentState();

  return (
    <>
      <h1>Todo List</h1>
      <hr />
      <TodoList todoList={todoList} />

      <AddTodoForm onAddTodo={addTodo} />
    </>
  );
};

export default App;
