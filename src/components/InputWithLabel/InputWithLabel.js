import React, { useRef, useEffect } from "react";
import style from "./InputWithLabel.module.css";
import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

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
    //callback function that does Focus input ref
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

      <button type="submit" className={style.btn}>
        <FaPlus className={style.plus} /> Add Todo
      </button>
    </>
  );
};

InputWithLabel.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  children: PropTypes.string,
};

export default InputWithLabel;
