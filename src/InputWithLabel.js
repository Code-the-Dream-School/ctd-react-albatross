import React, { useRef, useEffect } from "react"

export default function InputWithLabel(props) {

    const inputRef = React.useRef();

    React.useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <>
            <label htmlFor='todoTitle'>{props.children}</label>
            <input
            type='text'
                id={props.id}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                ref={inputRef}
            />
        </>
    )
}