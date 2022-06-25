import React from 'react';

const todoList = [
  {
    id: 1,
    title: "Create an empty array"
  },
  {
    id: 2,
    title: "Enter 3 objects into the array"
  },
  {
    id: 3,
    title: "Complete an assignment"
  },

]

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      
      <ul>
        {todoList.map(function (task) {
        return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
    </div>
  );
}
 

export default App;