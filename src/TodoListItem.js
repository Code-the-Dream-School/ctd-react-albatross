import React from 'react'
import style from './css/TodoListItem.module.css'; // Import css modules stylesheet as styles
const TodoListItem = ({ todo, onRemoveTodo }) => {


    return (
        <li className={style.ListItem}>
            <span>
                {todo.fields.Title}
            </span>
            <button className={style.button} type="button" onClick={() => onRemoveTodo(todo.id)} >
                Remove
            </button>
        </li>
    )
}


export default TodoListItem;