import React from 'react';

function TodoListItem({ title }) {
    return (
        <li>
            <span>
                {title}
            </span>
        </li>
    )
}

export default TodoListItem;