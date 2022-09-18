import React from "react";
import style from "./TodoListItem.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo }) => {
  return (
    <li className={style.ListItem}>
      <span className={style.text}>{todo.title}</span>
      <button onClick={() => onRemoveTodo(todo.id)} className={style.btn}>
        <FaRegTrashAlt className={style.trash} />
      </button>
    </li>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
