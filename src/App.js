import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  // new state variable newTodo(gets the state) with update function setNewTodo
  const [newTodo, setNewTodo] = React.useState('');

  return (
    <div>
      {/* create a level 1 heading Todo List, unordered list and return render Todo List items */}
      <h1>Todo List</h1>

      {/* pass setNewTodo as a call back handler prop */}
      <AddTodoForm onAddTodo={setNewTodo} />

      {/* paragraph displays the value of newTodo variable */}
      <p>{newTodo}</p>
      <TodoList />

    </div>
  );
}

export default App;
