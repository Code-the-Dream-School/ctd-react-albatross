import React from 'react';

// Open /src/TodoListItem.js and update props to use destructuring
const TodoListItem = (todo) => {
    return <li key={todo.id}>{todo.title}</li>;
};

export default TodoListItem;
