
import React from 'react';

const todoList = [
  {
    id: 0,
    title: 'Read The-Road-to-React'
  },

  {
    id: 1,
    title: 'Complete current assignment'
  },

  {
    id: 2,
    title: 'Submit assignment'
  }
];

function App() {
  return (
    <div>
      {/* create a level 1 heading Todo List, unordered list and return render Todo List items */}
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return (
            <li key={item.id}>
              <span>
                {item.title}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
