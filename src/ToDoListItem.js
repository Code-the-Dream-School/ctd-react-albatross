import React from 'react';

export const ToDoListItem = ({onRemoveToDo, todo}) => {
    return (
        <div>
            {/* accessing the props passed into ToDoListItem in the ToDoList component where they are being rendered, rendering each elements id and title via props.id and props.todo */}
            <li>
                <span>{todo}</span>
                {/* remove button below not functional when attempting to remove items by key (i.e. the id of the to do list item) instead this method would result in entire to do list removal; switching to removing by matching title resolves the issue and to do list items can be individually removed when using the title only */}
                <button type="button" onClick={() => {onRemoveToDo(todo)}}>
                    Remove
                </button>
            </li>
        </div>
    )
};