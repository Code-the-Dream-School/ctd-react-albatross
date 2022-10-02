import React from "react";
import style from "./TodoListItem.module.css"
import PropTypes from "prop-types";

const TodoListItem = ({ todo, onRemoveTodo })=>{
    return (
        <>

            <li className = {style.ListItem} >
                <span>{todo.title }</span>
                <button className={style.Button} type="button" onClick={() => onRemoveTodo(todo.id)}>

            <li>
                <span>{todo.title}</span>
                <button type="button" onClick={() => onRemoveTodo(todo.id)}>

                    Remove
                </button>
            </li> 
        </>
    );
}

TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};



export default TodoListItem;