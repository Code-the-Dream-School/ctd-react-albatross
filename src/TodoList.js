import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => (
  <>
    <ul>
      {props.list.map((item) => (
        <TodoListItem key={item.id} item={item} />
      ))}
    </ul>
  </>
);

export default TodoList;
