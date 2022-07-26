import { ToDoList } from './ToDoList';
import { AddToDoForm } from './AddToDoForm';
import { useState, useEffect } from 'react';

// create custom hook to load stored todolist from local storage as well as keep it updated as state changes anywhere in the app
const useSemiPersistentState = (key, initialState) => {
  const [ toDoList, setToDoList ] = useState(
    JSON.parse(localStorage.getItem('savedToDoList')) || []
  );

  useEffect(() => {
    localStorage.setItem('savedToDoList', JSON.stringify(toDoList))
  }, [toDoList]);

  return [toDoList, setToDoList];
}

function App() {
  const [toDoList, setToDoList] = useSemiPersistentState();

  const addToDo = (newToDo) => {
    // DECLARE the callback handler
    // this function updates the state of the toDoList array of objects
    setToDoList([...toDoList, newToDo]);
  }

  return (
    <>
      <h1>To Do List</h1>
      {/* PASS the callback handler to the form */}
      <AddToDoForm onAddToDo={addToDo} />
      {/* PASS the stateful array of objects to the list */}
      <ToDoList list={toDoList} />
    </>
  );
}

export default App;
