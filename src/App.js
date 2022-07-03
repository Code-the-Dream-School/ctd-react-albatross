import React from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';




function App() {
  return (
    <>
    <h1>Todo List</h1>
      <TodoList />
      <AddTodoForm />
    </>
  )
}


export default App;
