import react from "react";

const TodoListItem = (props) => {
  return (
    <li>
      <span>{props.todo.title}</span>
    </li>
  );
};
export default TodoListItem;
