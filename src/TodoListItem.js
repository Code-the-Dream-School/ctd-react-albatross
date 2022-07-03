import React from 'react'

const TodoListItem = (props) => {


    return (
        <div>
            <span>{props.id} </span>
            <span>{props.title}</span>
        </div>
    )
}


export default TodoListItem;