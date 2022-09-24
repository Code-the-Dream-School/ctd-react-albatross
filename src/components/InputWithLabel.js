import React, { useRef, useEffect } from 'react';
import style from '../TodoListItem.module.css';
import propTypes from 'prop-types';

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    InputWithLabel.propTypes = {
        todoTitle: propTypes.string,
        handleTitleChange: propTypes.func,
        children: propTypes.element,
    };

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
