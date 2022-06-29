import React from 'react';

const todoList = [
  { id: 1, 
    title: "Add To List"
  },
  { id: 2, 
    title: "remove From List"
  },
  { id: 3, 
    title: "completed Assignment"
  },
];


function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
        <ul>
            {todoList.map((todoList)=> {
              return (
                <li> 
                  {todoList.key}
                  {todoList.title}
              </li>
              )
            })}
        </ul>
        </header>
    </div>
  );
}

export default App;
