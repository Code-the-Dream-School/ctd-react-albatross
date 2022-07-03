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

// Submitting as complete and adding a comment here to make lesson-1-2-b different from lesson-1-2. Will remove when I hear back from mentor and can correct the 10k pending changes issue from lesson-1-2. Will proceed to work on lesson-1-3  