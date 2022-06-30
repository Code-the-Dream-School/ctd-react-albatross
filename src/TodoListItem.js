import React from 'react';

function TodoListItem(props) {
    return (
        <li>
            <span>
                {props.title}
            </span>
        </li>
    )
}

export default TodoListItem;