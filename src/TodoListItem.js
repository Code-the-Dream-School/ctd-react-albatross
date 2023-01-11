import React from 'react';
import TodoListItem from 'TodoListItem';


function TodoListItem(){

    return(
        <li>
            <span>{listItem.id} </span>
            <span>{listItem.title}</span>
        </li>
    )
}


export default TodoListItem; 