import React from "react"
import TodoListItem from "./TodoListItem";

const TodoList =() => { 
const todoList = [
    { id: 1, 
      title: " Do Laundry"
    },
    { id: 2, 
      title: " Grocery Shopping"
    },
    { id: 3, 
      title: " Water Garden"
    },
  ];

    return (
      <div>
        <h1>Todo List</h1>
        {todoList.map( todo =>
              <TodoListItem
                id={todo.id}
                title={todo.title}/>
        )}
      </div>
        
    )
}
    



export default TodoList;
