import { ToDoList } from './ToDoList';
import { AddToDoForm } from './AddToDoForm';
import { useState } from 'react';

function App() {
  // establishing toDoList as a stateful object and setting the initial state
  const [ toDoList, setToDoList ] = useState([]);

  const addToDo = (newToDo) => {
    // DECLARE the callback handler
    // this function updates the state of the toDoList array of objects
    setToDoList([...toDoList, newToDo])
  }

  return (
    <div>
      <h1>To Do List</h1>
      {/* PASS the callback handler to the form */}
      <AddToDoForm onAddToDo={addToDo} />
      {/* PASS the stateful array of objects to the list */}
      <ToDoList list={toDoList} />
    </div>
  );
}

export default App;
