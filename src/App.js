import React, {useState} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
// import TodoListItem from './TodoListItem';



function App() {
const addTodo = (newTodo) =>{
  setTodoList([todoList, newTodo])
};
  const [todoList, setTodoList]= useState([]);

  return (
    <div className="App">
      
        <AddTodoForm
        onAddTodo={addTodo}/>
        <TodoList todoList={todoList}/>
        
    </div>
  );
}

export default App;
