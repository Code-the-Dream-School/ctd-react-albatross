import React, { useEffect, useRef } from "react";


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
export default InputWithLabel;
