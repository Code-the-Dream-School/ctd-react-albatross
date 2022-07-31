import React, { useRef, useEffect } from 'react';

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });
    return (
        <>
            <label htmlFor="todoTitle">{children}</label>
            <input
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
