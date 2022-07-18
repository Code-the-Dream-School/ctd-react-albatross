import React, {useState} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';




function App() {
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  };

  const [todoList, setTodoList] = useState([]) 
  
  return (
    <div>
    <h1>Todo List</h1>
      <TodoList todoList={todoList} />
      <AddTodoForm
        onAddTodo={addTodo} /> 
    </div>
  )
}


export default App;


