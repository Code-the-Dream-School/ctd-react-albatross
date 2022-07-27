import React from 'react';

const InputWithLabel = ({
	children,
	todoTitle,
	handleTitleChange,
	isFocused,
}) => {
	const inputRef = React.useRef();

	React.useEffect(() => {
		inputRef.current.focus();
	}, []);
	return (
		<>
			<label htmlFor='todoTitle'>{children} </label>
			<input
				ref={inputRef}
				id='todoTitle'
				name='title'
				value={todoTitle}
				onChange={handleTitleChange}
			/>
		</>
	);
};

export default InputWithLabel;
