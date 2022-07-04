import React, { useState } from "react";

const AddTodoForm = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = inputValue;
    console.log(todoTitle);
    props.onAddTodo(todoTitle);

    event.target.reset();
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">Title</label>
        <input
          id="todoTitle"
          type="text"
          name="title"
          placeholder="Add your todo here"
          onChange={handleChange}
        ></input>
        <input type="submit" value="Add"></input>
      </form>
    </>
  );
};

export default AddTodoForm;
