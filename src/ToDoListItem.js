import React from 'react';

export const ToDoListItem = ({onRemoveToDo, todo}) => {
    return (
        <div>
            <li>
                <span>{todo.fields.Title}</span>
                {/* remove button below not functional when attempting to remove items by key (i.e. the id of the to do list item) instead this method would result in entire to do list removal; switching to removing by matching title resolves the issue and to do list items can be individually removed when using the title only */}
                <button type="button" onClick={() => onRemoveToDo(todo.id)}>
                    Remove
                </button>
            </li>
        </div>
    )
};