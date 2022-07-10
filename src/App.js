import React, {useState} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';




function App() {

  const [newTodo, setNewTodo] = useState("");
  
  return (
    <div>
    <h1>Todo List</h1>
      <TodoList />
      <AddTodoForm
        onAddTodo={setNewTodo} /> 
      <p>{newTodo}</p>
    </div>
  )
}


export default App;


