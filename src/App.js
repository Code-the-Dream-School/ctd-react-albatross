import { ToDoList } from './ToDoList';
import { AddToDoForm } from './AddToDoForm';
import { useState, useEffect } from 'react';

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}${process.env.REACT_APP_AIRTABLE_BASE_NAME}`

function App() {

  const [ toDoList, setToDoList ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    fetch(`${url}`, {headers: {Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`}})
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setToDoList(result.records);
        setIsLoading(false);
      })
      .catch(()=>{console.log('Error')})
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
