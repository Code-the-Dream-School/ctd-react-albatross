import { ToDoList } from './ToDoList';
import { AddToDoForm } from './AddToDoForm';
import { useState, useEffect, useCallback } from 'react';
import Airtable from 'airtable';

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}${process.env.REACT_APP_AIRTABLE_BASE_NAME}`
const base = new Airtable({apiKey: `${process.env.REACT_APP_AIRTABLE_API_KEY}`}).base(`${process.env.REACT_APP_AIRTABLE_BASE_ID}`);

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

  // i want to create a function that will take in the newToDo from the Form and create an item in my airtable and then re-fetch the airtable data to display the new item
  const addToDo = useCallback((newToDo) => {
    base(`Default`).create([
      // SO CLOSE!!!! this posts [object Object] to the airtable, need to determine what I'm doing wrong here
      {fields: {Title: newToDo.toString()}}
    ], function(err, records) {
      if (err) {
        console.error(err);
        return;
      }
      records.forEach(function (record) {
        console.log(record.getId());
      });
    })
  }, []);
    // DECLARE the callback handler
    // this function updates the state of the toDoList array of objects
    // setToDoList([...toDoList, newToDo]);
    // console.log(newToDo);
    // })

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
