import React from 'react';

const todoList = {
  id: "First",
  title: "Review notes",
  id: "Second",
  title: "Listen to next 2 React sections",
  id: "Third",
  title: "Make dinner",
}

function App() {
  <div>
  <h1>Todo List</h1>
  <ul>{todoList.map}</ul>
  return (
    <li key="id">(title)</li>
  )
  </div>
}


export default App;
