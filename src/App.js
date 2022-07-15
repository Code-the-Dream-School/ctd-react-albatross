import React, { useState } from 'react';
import ToDoList from './TodoList';
import AddTodoFrom from './AddTodoForm';
import './App.css';


function App() {

  // const [newTodo, setNewTodo] = useState("");

  const [todoList, setTodoList] = useState([]);

  const addTodo = newTodo => {
    setTodoList([...todoList ,newTodo]) 
  } 

  return (
    <div className='App'>
      <ToDoList
      todoList={todoList}
      />
      <AddTodoFrom
        // onAddTodo={setNewTodo}
        onAddTodo={addTodo}
      />
      <p>
        {/* {newTodo} */}
      </p>
    </div>


  );
}

export default App;


// import React from 'react';
// import TodoList from './TodoList';
// import AddTodoForm from './AddTodoForm';

// function App() {
//   const [todoList, setTodoList] = React.useState([]);

//   function addTodo(newTodo) {

//     setTodoList([...todoList, newTodo])
//   }

//   return (
//     <div>
//       <h1>Todo List</h1>

//       <AddTodoForm onAddTodo={addTodo} />


//       <TodoList todoList={todoList} />

//     </div>
//   );
// }

// export default App;

