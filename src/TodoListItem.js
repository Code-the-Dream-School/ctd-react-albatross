import React from "react";

const TodoListItem = ({ todo, onRemoveTodo })=>{
    return (
        <>
            <li key={todo.id}><button type="button" onClick={() => onRemoveTodo(todo.id)}>Remove</button>{todo.title}</li> 
        </>
    );
};

export default TodoListItem;