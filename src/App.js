import React from 'react';

//Create an empty array and store it in a var named todoList
let todoList = [
  { "id": 1, 
  "title": "Workout"
  },
  { "id": 2, 
  "title": "Work"
  },
  { "id": 3, 
  "title": "Work on homework"
  }
];

function App() {
  return (
    <div>
      <header>
      <h2>ToDo List :</h2> 
        <ul>
          {todoList.map( function(listItem) {
            return <li>{listItem.id} {listItem.title}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
