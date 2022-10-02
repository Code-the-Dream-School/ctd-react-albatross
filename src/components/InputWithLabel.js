import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";


const InputWithLabel = (props) => {
    const inputRef = React.useRef();
    React.useEffect(() => {
        inputRef.current.focus();
    });
    
    return (
        <><label htmlFor="todoTitle">{props.children} </label>
            <input ref={inputRef} type="text" name="title" id="todoTitle" value={props.todoTitle} onChange={props.handleTitleChange} /></>
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
