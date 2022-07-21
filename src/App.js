import React, { useState } from 'react';
import ToDoList from './TodoList';
import AddTodoFrom from './AddTodoForm';
import './App.css';


function App() {

  // const [newTodo, setNewTodo] = useState("");

  const [todoList, setTodoList] = useState([]);

  const addTodo = newTodo => {
    setTodoList([...todoList ,newTodo]) 
  } 

  return (
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


  );
}

export default App;



