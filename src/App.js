import React from 'react';
import {ToDoList} from './ToDoList';
import {AddToDoForm} from './AddToDoForm';

function App() {
  return (
    <div>
      <h1>To Do List</h1>
      <AddToDoForm />
      <ToDoList />

    </div>
  );
}

export default App;
