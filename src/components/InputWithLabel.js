import React, { useEffect, useRef } from "react";

import PropTypes from "prop-types";

const InputWithLabel = (props) => {

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    },
        []);

        InputWithLabel.propTypes = {
            props: PropTypes.object,
          };

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
