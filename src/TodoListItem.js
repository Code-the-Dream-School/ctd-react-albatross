import React from "react";


const TodoListItem = (props) => {
    return (
        <div> 
            {props.id}
            {props.title}
        </div>
    )
}
 
export default TodoListItem;