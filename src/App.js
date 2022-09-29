import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import AddTodoForm from "./components/AddTodoForm/AddTodoForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import style from "./App.module.css";

const App = () => {
  const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default?sort%5B0%5D%5Bfield%5D=Title&sort%5B0%5D%5Bdirection%5D=asc&view=Grid%20view`;

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
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

  const addTodo = (newTodo) => {
    const title = newTodo[0].title;
    const postBody = {
      fields: {
        Title: title,
      },
      typecast: true,
    };
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    };
    let todo = {};
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        todo.id = data.id;
        todo.title = data.fields.Title;
      });
    setTodoList([...todoList, ...newTodo]);
  };

  const removeTodo = async (id) => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`,
      options
    );

    setTodoList(todoList.filter((todoList) => todoList.id !== id));
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

                <AddTodoForm onAddTodo={addTodo} />

                {isLoading ? (
                  <p>Loading ...</p>
                ) : (
                  <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
                )}
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
