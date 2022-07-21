import React from "react";
import TodoListItem from "./TodoListItem";


const ToDoList = ({todoList}) => {
    return (
        <div>
            <h1>Todo List</h1>
            {todoList.map( (todo) =>
              
                    <TodoListItem
                    // Changing the "key" to "id" will display the unique id for that task 
                    // You'll get an error if you change it ig because "key" is req and set by react?
                    key={todo.id}
                    title={todo.title}
                    />
                )}
        </div>
    )
}


export default ToDoList