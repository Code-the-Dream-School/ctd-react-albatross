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
        <ul>
          {todoList.map(function(listItem){
            return <li>
                    <span>{listItem.id} </span>
                    <span>{listItem.title}</span>
                  </li>
          })}
        </ul>
    )

    

}


export default TodoList;