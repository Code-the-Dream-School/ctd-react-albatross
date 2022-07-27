import TodoListItem from "./TodoListItem";

/*const todoListData = [
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
*/
const TodoList = ({ todoList, onRemoveTodo }) => {
  // console.log(Object.entries(todoList));

  return (
    <ul>
      {todoList.map(function (item) {
        return (
          <TodoListItem todo={item} key={item.id} onRemoveTodo={onRemoveTodo} />
        );
      })}
    </ul>
  );
};
export default TodoList;
