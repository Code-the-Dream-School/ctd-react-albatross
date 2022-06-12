import React from "react";

const todoList = [
  {
    id: 0,
    title: "Eat 6 servings of vegetables",
  },
  {
    id: 1,
    title: "Drink 2 liters of water",
  },
  {
    id: 2,
    title: "Work out for 1 hour",
  },
];

function App() {
  return (
    <div style={{ textAlign: "center" }}>
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
