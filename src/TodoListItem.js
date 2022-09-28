import React from "react";


const TodoListItem = ({title, onRemoveTodo}) => {

    return (
        <li> 
            <span>
                {title}
            </span>
            <button type="button" onClick={() => onRemoveTodo(title)}> Remove </button>
        </li>
    )
}

 
export default TodoListItem;
