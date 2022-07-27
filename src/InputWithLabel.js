import React, { useEffect } from "react";

const InputWithLabel = (props) => {
  const inputRef = React.useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <>
      <label htmlFor="todoTitle">{props.children}</label>
      <input
        ref={inputRef}
        id="todoTitle"
        name="title"
        type="text"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        // autoFocus
      ></input>
    </>
  );
};
export default InputWithLabel;
