import React from 'react';

const TodoListItem = ({ id, title, onRemoveTodo }) => {
    return (
        <li>
            <span>{title}</span>
            <button type="button" onClick={() => onRemoveTodo(id)}>
                Remove
            </button>
        </li>
    );
};

export default TodoListItem;
