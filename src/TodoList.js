import React from 'react';

const todoList = [
    {
        id: 1,
        title: 'Create Empty Array',
    },
    {
        id: 2,
        title: 'Create 3 objects',
    },
    {
        id: 3,
        title: 'Complete assignment',
    },
];

function TodoList() {
    return (
        <div>
            <ul>
                {todoList.map(function (item) {
                    return <li key={item.id}>{item.title}</li>;
                })}
            </ul>
        </div>
    );
}

export default TodoList;
