import React from "react";

const TodoListItem = (todo) => {
    return <li key={todo.id}>{todo.title}</li>
};

export default TodoListItem;