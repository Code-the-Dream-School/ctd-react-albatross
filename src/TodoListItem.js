import React from "react";

const TodoListItem = ({ todo, onRemoveTodo })=>{
    return (
        <>
            <li key={todo.id}>{todo.title} <button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button></li> 
        </>
    );
};

export default TodoListItem;