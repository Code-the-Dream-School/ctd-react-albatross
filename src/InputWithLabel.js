import React, { useState, useEffect, useRef } from "react";


const InputWithLabel = (props) => {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },
        []);

    return (
        <>
            <label htmlFor='todoTitle'>{props.children}</label>
            <input
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                ref={inputRef}

            />
        </>
    )
}



export default InputWithLabel