import React, { useState, useEffect } from 'react';
import ToDoList from './TodoList';
import AddTodoFrom from './AddTodoForm';
import './App.css';


const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('savedTodoList') || '[]')
  );

  useEffect(() => {
    const json = JSON.stringify(todoList);
    localStorage.setItem('savedTodoList', json);
  }, [todoList]);
  return [todoList, setTodoList];
};

function App() {

  // const [newTodo, setNewTodo] = useState("");

  const [todoList, setTodoList] = useSemiPersistentState([]);

  const addTodo = newTodo => {
    setTodoList([...todoList, newTodo])
  }

  return (
    <>
      <div className='App'>
        <ToDoList
          todoList={todoList}
        />
        <AddTodoFrom
          // onAddTodo={setNewTodo}
          onAddTodo={addTodo}
        />
        <p>
          {/* {newTodo} */}
        </p>
      </div>
    </>

  );
}

export default App;



