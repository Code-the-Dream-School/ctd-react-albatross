import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const App = () => {
  const addTodo = (newTodo) => {
    setTodoList([...todoList, ...newTodo]);
  };

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() =>
        resolve({
          data: { todoList: JSON.parse(localStorage.getItem("savedTodoList")) },
        })
      );
    }, 2000).then((result) => {
      setTodoList(result.data.todoList);
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  const removeTodo = (id) => {
    const removeItem = todoList.filter((todoList) => {
      return todoList.id !== id;
    });
    setTodoList(removeItem);
  };

  return (
    <>
      <h1>Todo List</h1>
      <hr />
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />

      <AddTodoForm onAddTodo={addTodo} />
    </>
  );
};

export default App;
