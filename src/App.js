import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./App.module.css";

const App = () => {
  const addTodo = (newTodo) => {
    setTodoList([...todoList, ...newTodo]);
  };

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTodoList(
          data.records.map((record) => ({
            title: record.fields.Title,
            id: record.id,
          }))
        );
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      setIsLoading(
        localStorage.setItem("savedTodoList", JSON.stringify(todoList))
      );
    }
  }, [todoList]);

  const removeTodo = (id) => {
    const removeItem = todoList.filter((todoList) => {
      return todoList.id !== id;
    });
    setTodoList(removeItem);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <div className={style.background}>
                <h1 className={style.header}>My Todo List</h1>

                {isLoading ? (
                  <p>Loading ...</p>
                ) : (
                  <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                )}

                <AddTodoForm onAddTodo={addTodo} />
              </div>
            </>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
