import React from 'react';
import { ToDoList } from './ToDoList';
import { AddToDoForm } from './AddToDoForm';
import { toDoList } from './ToDoList';
import { useState } from 'react';

function App() {
  // can use React.useState(''); OR can import it and desctructure from it directly as below
  const [newToDo, setNewToDo] = useState('');
  return (
    <div>
      <h1>To Do List</h1>
      <AddToDoForm onAddToDo={setNewToDo}/>
      <p>{newToDo}</p>
      {/* pass in toDoList to the ToDoList component as props to access the data stored in the toDoList object (ids and titles) */}
      <ToDoList list={toDoList}/>
    </div>
  );
}

export default App;
