import React from 'react';
import TodoListItem from "./TodoListItem"

const todoList = [
  {
    id: "First",
    title: "Review notes"
  },
    {id: "Second",
    title: "Listen to next 2 React sections"},
    {id: "Third",
    title: "Make dinner"},
  ]

const TodoList = () => {
    return (
        <ul>
        {todoList.map((todo) =>
          <TodoListItem key={todo.id} title = {todo.title} />)}
        </ul>
    )
}

export default TodoList;