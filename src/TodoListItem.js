import React from "react";
import style from "./TodoListItem.module.css";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li className={style.ListItem}>
      <span className={style.text}>{todo.title}</span>
      <button onClick={() => onRemoveTodo(todo.id)} className={style.btn}>
        Delete
      </button>
    </li>
  );
};

export default TodoListItem;
