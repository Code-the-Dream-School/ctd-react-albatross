import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  {
    id: 1,
    title: "JavaScript Basic",
  },
  {
    id: 2,
    title: "Become a React.JS Developer",
  },
  {
    id: 3,
    title: "Take Node.JS Course",
  },
];

const TodoList = () => {
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
