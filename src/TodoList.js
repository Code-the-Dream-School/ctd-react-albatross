import React from "react";

// Above the App() function, create an empty Array and store it in a variable named todoList
let todoList = [
    {
      id: 1,
      title: "Workout"
    },
    {
      id: 2,
      title: "Work"
    },
    {
      id: 3,
      title: "Homework"
    },
  ]

function TodoList(){

    return (
        //console.log("Hi! I'm inside todo list")
        <div>
            <h1>To Do List Hello!</h1>
            <ul>
            {todoList.map(function(listItem){
                return <li key={listItem.id}>
                    {listItem.title}
                  </li>
            })}
            </ul>
        </div>
    )
}

export default TodoList;