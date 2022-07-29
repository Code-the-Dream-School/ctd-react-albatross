import React, { useRef, useEffect } from "react";

const InputWithLabel = ({
  id,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  children,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <input type="submit" value="Add" />
    </>
  );
};

export default InputWithLabel;
