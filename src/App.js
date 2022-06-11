import React from 'react';

const todoList = [
  {
    id: "1",
    title: "eat lunch",
  },
  {
    id: "2",
    title: "hit the gym",
  },
  {
    id: "3",
    title: "sleep",
  }
]

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(item =>
          <li key={item.id}>
            <l1>{item.title}</l1>
          </li>

        )}

      </ul>
    </div>
  );
}

export default App;
