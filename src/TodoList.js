import React from 'react';
import TodoListItem from './TodoListItem.js';

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
    // console.log(todoList);
    return (
        <ul>
            {todoList.map(function (todo) {
                return <TodoListItem key={todo.id} title={todo.title} />;
            })}
        </ul>
    );
}

export default TodoList;
