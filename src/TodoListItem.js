import React from "react";
import style from "./css/TodoListItem.module.css";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li className={style.ListItem}>
      <span>{todo.fields.Title} </span>
      <button
        type="button"
        onClick={() => onRemoveTodo(todo.id)}
        className={style.remove_button}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoListItem;
