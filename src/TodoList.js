import React from 'react';

const todoList = [
    {
        id: 0,
        title: 'Read The-Road-to-React'
    },

    {
        id: 1,
        title: 'Complete current assignment'
    },

    {
        id: 2,
        title: 'Submit assignment'
    }
];

function TodoList() {
    return (
        <ul>
            {todoList.map(function (item) {
                return (
                    <li key={item.id}>
                        <span>
                            {item.title}
                        </span>
                    </li>
                )
            })}
        </ul>
    )
}

export default TodoList;