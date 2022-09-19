import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
// import TodoListItem from './TodoListItem';

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('savedTodoList')) || []
  );
  useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {

const [todoList, setTodoList]= useSemiPersistentState();
const addTodo = (newTodo) => {
  setTodoList([...todoList, newTodo])
};


  return (
    <div className="App">
      <h1> To Do List</h1>
        <AddTodoForm
        onAddTodo={addTodo}/>
        <TodoList todoList={todoList}/>
        
    </div>
  );
}

export default App;
