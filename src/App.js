import { ToDoList } from './ToDoList';
import { AddToDoForm } from './AddToDoForm';
import { useState, useEffect } from 'react';

// create custom hook to load stored todolist from local storage as well as keep it updated as state changes anywhere in the app
// const useSemiPersistentState = (key, initialState) => {
//   const [ toDoList, setToDoList ] = useState(
//     JSON.parse(localStorage.getItem('savedToDoList')) || []
//   );

//   useEffect(() => {
//     localStorage.setItem('savedToDoList', JSON.stringify(toDoList))
//   }, [toDoList]);

//   return [toDoList, setToDoList];
// }

function App() {
  // const [toDoList, setToDoList] = useSemiPersistentState();

  const [ toDoList, setToDoList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve({data: {toDoList: JSON.parse(localStorage.getItem('savedToDoList')) || [] }}), 2000);
    })
    .then((result) => {console.log(result); setToDoList([...result.data.toDoList]); setIsLoading(false);})
  }, [])

  useEffect(() => {
    if(!isLoading) {
    localStorage.setItem('savedToDoList', JSON.stringify(toDoList))}
  }, [toDoList]);


  

  const addToDo = (newToDo) => {
    // DECLARE the callback handler
    // this function updates the state of the toDoList array of objects
    setToDoList([...toDoList, newToDo]);
    console.log(newToDo);
  }

  const removeToDo = (id) => {
    // create a new to do list including only those to do items whose keys do NOT equal the id passed in as a parameter
    const updatedToDoList = toDoList.filter(
      // the logic here (when passing in id) is causing EVERY item to be removed on click of the remove button, how do I fix this?
      (todo) => todo.id !== id
      );

    setToDoList(updatedToDoList);
  }

  return (
    <>
      <h1>To Do List</h1>
      {/* PASS the callback handler to the form */}
      <AddToDoForm onAddToDo={addToDo} />
      {/* PASS the stateful array of objects to the list */}
      {isLoading ? <p>Loading...</p> : <ToDoList list={toDoList} onRemoveToDo={removeToDo}/>}
    </>
  );
}

export default App;
