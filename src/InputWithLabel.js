import React, { useRef, useEffect } from 'react';
import style from './TodoListItem.module.css';

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });
    return (
        <>
            <label htmlFor="todoTitle">{children}</label>
            <input
                className={style.input}
                id="todoTitle"
                type="text"
                name="title"
                value={todoTitle}
                onChange={handleTitleChange}
                ref={inputRef}
            />
        </>
    );
};

export default InputWithLabel;
