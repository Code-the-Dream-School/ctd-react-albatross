import React from 'react'
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

function App() {
  const [todoList, setTodoList] = React.useState([]);
  
  //Add New Todo to List
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
  }
  
  React.useState(localStorage.getItem)

  // Save Todo List in Storage
  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
