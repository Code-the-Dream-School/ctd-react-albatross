import react from "react";
import TodoListtodo from "./TodoListItem";
const TodoListData = [
  {
    id: 1,
    title: "Read the book",
  },
  {
    id: 2,
    title: "Go for a walk with the baby",
  },
  {
    id: 3,
    title: "Send B & R order back",
  },
];

const TodoList = (props) => {
  return (
    <ul>
      {TodoListData.map(function (item) {
        return <TodoListtodo todo={item} key={item.id} />;
      })}
    </ul>
  );
};
export { TodoListData };
export default TodoList;
