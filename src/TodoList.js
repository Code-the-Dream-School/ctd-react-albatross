import React from "react";
import TodoListItem from "./TodoListItem";
const ToDoList = () => {
    const todoList = [
        {
            id: 1,
            title: "eat lunch",
        },
        {
            id: 2,
            title: "hit the gym",
        },
        {
            id: 3,
            title: "sleep",
        },
        {
            id: 4,
            title: "walk dog",
        },
        {
            id: 5,
            title: "run a mile",
        },
    ]


    return (
        <div>
            <h1>Todo List</h1>
            {todoList.map( todo =>
              
                    <TodoListItem
                    id={todo.id}
                    title={todo.title}
                    />
                )}
        </div>
    )
}


export default ToDoList