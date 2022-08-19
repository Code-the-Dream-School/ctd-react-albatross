import React, { useState, useEffect } from 'react';
import ToDoList from './TodoList';
import AddTodoFrom from './AddTodoForm';
import './App.css';


// const useSemiPersistentState = () => {
//   const [todoList, setTodoList] = useState(
//     JSON.parse(localStorage.getItem('savedTodoList') || '[]')
//   );

//   useEffect(() => {
//     const json = JSON.stringify(todoList);
//     localStorage.setItem('savedTodoList', json);
//   }, [todoList]);
//   return [todoList, setTodoList];
// };

function App() {

  //  const [todoList, setTodoList] = useState(
  //   JSON.parse(localStorage.getItem('savedTodoList') || '[]')
  // );

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise((resolve, reject) =>
    setTimeout(
      () => resolve({ data: { todoList: JSON.parse(localStorage.getItem('savedTodoList') || '[]') } }),
      2000
    )
  )
    .then((result) => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    })
}, []);

useEffect(() => {
  if (!isLoading) {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }
}, [todoList])

  const addTodo = newTodo => {
    setTodoList([...todoList, newTodo])
  }

  const removeTodo = (id) => {

    const newTodoList = todoList.filter((todo) => todo.title !== id);

    setTodoList(newTodoList);
  }

  return (
    <>
         <div className='App'>
         {isLoading ? (<p>Loading ...</p>) :
        (<ToDoList todoList={todoList} onRemoveTodo={removeTodo} />)
        }
        <AddTodoFrom
          // onAddTodo={setNewTodo}
          onAddTodo={addTodo}
        />
       
      </div>
    </>

  );
}

export default App;



