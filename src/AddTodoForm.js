import React from "react";

const AddTodoForm = () => {
  return (
    <>
      <form>
        <label htmlFor="todoTitle">Title</label>
        <input id="todoTitle" type="text"></input>
        <input type="submit" value="Add"></input>
      </form>
    </>
  );
};

export default AddTodoForm;
