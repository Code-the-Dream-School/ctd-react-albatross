import React, { useState } from 'react';
import ToDoList from './TodoList';
import AddTodoFrom from './AddTodoForm';
import TodoListItem from './TodoListItem';
import './App.css';


function App() {

  const [newTodo, setNewTodo] = useState("");

  return (
    <div className='App'>
      <ToDoList />
      <AddTodoFrom
        onAddTodo={setNewTodo}
      />
      <p>{newTodo}</p>
    </div>


  );
}

export default App;
