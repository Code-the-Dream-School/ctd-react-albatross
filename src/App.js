import React, {useEffect, useState} from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from "./App.module.css"



function App() {

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
      .then((resp) => resp.json())
      .then((data) => {

        const todos = data.records.map
          ((todo) => {
          return {id:todo.id, title:todo.fields.Title}
          })

        const todos = data.records.map((todo) => {
          return {id:todo.id, title:todo.fields.Title}
        })
        console.log(todos)
        setTodoList(todos);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [isLoading, todoList]);
  

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

  const removeTodo = (id) => {
    const newTodoList = todoList.filter((todo) =>
      id !== todo.id);
    setTodoList(newTodoList)
  }; 
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className={style.Body}>
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              {isLoading ? (
                <p className={style.Loading}>
                  Loading...
                </p>
              ) :
                (<TodoList todoList={todoList} onRemoveTodo={removeTodo} />)
              }
                </div>
            </>
          }></Route>
        
        <Route
          path="new"
          element={
            <h1>
              New Todo List
            </h1>
          }>
        </Route>
        
        </Routes>
      </BrowserRouter>
  );
};


export default App;


