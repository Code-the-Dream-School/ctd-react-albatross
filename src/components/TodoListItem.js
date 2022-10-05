import React from 'react'
import style from '../css/TodoListItem.module.css'; // Import css modules stylesheet as styles
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {

    TodoListItem.propTypes = {
        todo: PropTypes.string,
        onRemoveTodo: PropTypes.func,
    };
    return (
        <li className={style.ListItem}>
            <span>
                {todo.fields.Name}
            </span>
            <button className={style.button} type="button" onClick={() => onRemoveTodo(todo.id)} >
                Remove
            </button>
        </li>
    )
}


export default TodoListItem;