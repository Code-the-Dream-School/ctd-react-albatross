import React from 'react';
import TodoListItem from './TodoListItem';

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
            {todoList.map(function (todo) {
                return (
                    <TodoListItem key={todo.id} title={todo.title} />
                )
            })}
        </ul>
    )
}

export default TodoList;