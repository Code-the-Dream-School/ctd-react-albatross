import React from 'react';
import style from '../TodoListItem.module.css';
import propTypes from 'prop-types';

const TodoListItem = ({ todo, onRemoveTodo }) => {
    TodoListItem.propTypes = {
        todo: propTypes.string,
        onRemoveTodo: propTypes.func,
    };

    return (
        <li className={style.ListItem}>
            <span className={style.item}>{todo.fields.Title}</span>
            <button
                className={style.btn}
                type="button"
                onClick={() => onRemoveTodo(todo.id)}
            >
                Remove
            </button>
        </li>
    );
};

export default TodoListItem;
