import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  return (
    <div>
      {/* create a level 1 heading Todo List, unordered list and return render Todo List items */}
      <h1>Todo List</h1>
      <AddTodoForm />
      <TodoList />

    </div>
  );
}

export default App;
