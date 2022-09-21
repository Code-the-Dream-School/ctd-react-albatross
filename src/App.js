import React from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { useState } from "react";
import { useEffect } from "react";

/*function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
}*/

const App = () => {
  // const savedList = JSON.parse(localStorage.getItem("savedTodoList"));
  // const [todoList, setTodoList] = useSemiPersistentState();

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise(function (resolve, reject) {
      setTimeout(
        () =>
          resolve({
            data: {
              todo: JSON.parse(localStorage.getItem("savedTodoList") || "[]"),
            },
          }),
        2000
      );
    }).then((result) => {
      setTodoList(result.data.todo);
      setIsLoading(false);
    });
  });

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]);

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function removeTodo(id) {
    // console.log(id);
    const updatedList = todoList.filter((e) => e.id !== id);

    //   deletLi.parentNode.removeChild(deletLi);
    setTodoList(updatedList);
    // console.log(updatedList);
  }

  //console.log(savedList);
  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <p>{isLoading ? "Loading..." : ""} </p>
      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
};

export default App;
