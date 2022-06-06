import React from 'react';

const todoList = [
  {
    id: 1,
    title: "JavaScript Basic"
  },
  {
    id: 2,
    title: "Become a React.JS Developer"
  },
  {
    id: 3,
    title: "Take Node.JS Coarse"
  }
]

function App() {
  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {todoList.map((list) => (<li key={list.id}> {list.title} </li>))}
      </ul>
    </div>
  );
}

export default App;
