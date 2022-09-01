import React from 'react'

const TodoListItem = ({ todo, onRemoveTodo }) => {


    return (
        <li>
            <span>
                {todo.fields.Title}
            </span>
            <button type="button" onClick={() => onRemoveTodo(todo.id)} >
                Remove
            </button>
        </li>
    )
}


export default TodoListItem;