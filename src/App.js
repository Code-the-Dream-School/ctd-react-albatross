import React, {useState} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
// import TodoListItem from './TodoListItem';



function App() {

  const [newTodo, setNewTodo]= useState("");

  return (
   
    <div className="App">
        <AddTodoForm
          onAddTodo={setNewTodo}/>
        <TodoList/>
        <p>{newTodo}</p>
    </div>
  );
}

export default App;
