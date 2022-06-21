import React from "react";

const ToDoList = () => {
    const todoList = [
        {
            id: "1",
            title: "eat lunch",
        },
        {
            id: "2",
            title: "hit the gym",
        },
        {
            id: "3",
            title: "sleep",
        }
    ]
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todoList.map(item =>
                    <ol key={item.id}>
                        <span>{item.title}</span>
                    </ol>


                )}

            </ul>
        </div>
    )
}


export default ToDoList