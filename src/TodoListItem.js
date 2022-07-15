import React from 'react'

const TodoListItem = (props) => {


    return (
        <div>
            <span>{props.title}</span>
            <span>{props.id} </span>
            <span>{props.num} </span>

        </div>
    )
}


export default TodoListItem;