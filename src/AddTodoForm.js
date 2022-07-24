import React from 'react'
import InputWithLabel from './InputWithLabel';

function AddTodoForm({ onAddTodo }) {

    const [todoTitle, setTodoTitle] = React.useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;

        setTodoTitle(newTodoTitle)
    }

    const handleAddTodo = (event) => {
        event.preventDefault();

        let todoDetails = {
            id: Date.now(),
            title: todoTitle
        }

        onAddTodo(todoDetails);

        setTodoTitle('');
    }

    return (
        <form onSubmit={handleAddTodo}>
            {/* <label htmlFor='todoTitle'>Title</label>
            <input id='todoTitle' name='title' value={todoTitle} onChange={handleTitleChange} /> */}
            <InputWithLabel
                id='todoTitle'
                name='title'
                value={todoTitle}
                onChange={handleTitleChange}
                children
                inputRef
            >
                Title:
            </
            InputWithLabel>
            <button type='submit'>Add</button>
        </form>
    )
}

export default AddTodoForm