import { ToDoList } from './ToDoList';
import { AddToDoForm } from './AddToDoForm';
//import { toDoList } from './ToDoList';
import { useState } from 'react';

function App() {
  const [ toDoList, setToDoList ] = useState([]);

  const addToDo = (newToDo) => {
    // console.log(`Before setting: ${toDoList}`);
    setToDoList([...toDoList, newToDo])
    // console.log(`After setting: ${toDoList}`)
  }

  return (
    <div>
      <h1>To Do List</h1>
      <AddToDoForm
        onAddToDo={addToDo}
      />
      {/* pass in toDoList to the ToDoList component as props to access the data stored in the toDoList object (ids and titles) */}
      <ToDoList list={toDoList}/>
    </div>
  );
}

export default App;
