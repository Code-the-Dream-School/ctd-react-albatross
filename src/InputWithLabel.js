import { useState, useEffect, useRef } from 'react';

export const InputWithLabel = ({toDo, children, onTitleChange}) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <label htmlFor="toDoTitle">{children}</label>
            <input 
                id={toDo} 
                value={toDo}
                ref={inputRef}
                onChange={onTitleChange}
            />
        </>
    )
}