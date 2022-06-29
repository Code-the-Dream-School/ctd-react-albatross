import React from "react"

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


function TodoList() {
    return (
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
    );
}
    







export default TodoList;
