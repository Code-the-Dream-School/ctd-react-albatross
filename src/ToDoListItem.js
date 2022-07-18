import React from 'react';

export const ToDoListItem = ({todo}) => {
    return (
        <div>
            {/* accessing the props passed into ToDoListItem in the ToDoList component where they are being rendered, rendering each elements id and title via props.id and props.todo */}
            <li>
                {/* {console.log(props.id)} */}
                <span>{todo}</span>
                {/* {console.log(props.todo)} */}
            </li>
        </div>
    )
};