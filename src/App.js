import React from 'react';

const todoList = {
  id: "First",
  title: "test this thingy",
  id: "Second",
  title: "and another one",
  id: "Third",
  title: "oops i did it again",
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
