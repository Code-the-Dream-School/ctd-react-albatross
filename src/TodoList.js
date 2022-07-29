import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
  const { todoList, onRemoveTodo } = props;

  return (
    <>
      <ul>
        {todoList.map((item) => (
          <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
