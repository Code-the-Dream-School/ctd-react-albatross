import react from "react";
import App from "./App";
import TodoList from "./TodoList";

const AddTodoForm = (props) => {
  function handleAddTodo(event) {
    event.preventDefault();
    const todoTitle = event.target.title.value;
    console.log("Form:", todoTitle, props.onAddTodo, props.newTodo);
    event.target.title.value = "";
    props.onAddTodo(todoTitle);
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input id="todoTitle" name="title"></input>
      <button type="submit">Add</button>
    </form>
  );
};
export default AddTodoForm;
