import React, { useRef, useEffect } from "react";
import style from "./InputWithLabel.module.css";

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
        className={style.input}
        ref={inputRef}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <input type="submit" value="+ Add Todo" className={style.btn} />
    </>
  );
};

export default InputWithLabel;
