import React from 'react';

const todoList =[
    {
      id: "First",
      title: "Review notes"
    },
    {id: "Second",
    title: "Listen to next 2 React sections"},
    {id: "Third",
    title: "Make dinner"},
  ]

function TodoList() {
    return (
        <ul>
        {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>
    )
}



export default TodoList;