import React from "react";

let todoList = [
  {
    id: 1,
    title: "Read the book",
  },
  {
    id: 2,
    title: "Go for a walk with the baby",
  },
  {
    id: 3,
    title: "Send B & R order back",
  },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
