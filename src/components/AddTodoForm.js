import React, { useState } from 'react';
import InputWithLabel from './InputWithLabel';
import style from '../TodoListItem.module.css';
//  Import PropTypes from the "prop-types" package
import PropTypes from 'prop-types';

const AddTodoForm = ({ onAddTodo }) => {
    const [todoTitle, setTodoTitle] = useState('');

    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    };

    const handleAddTodo = (event) => {
        event.preventDefault();
        onAddTodo({ fields: { Title: todoTitle }, id: Date.now() });
        setTodoTitle('');
    };

    AddTodoForm.propTypes = {
        onAddTodo: PropTypes.func,
    };

    return (
        <div className={style.container}>
            <form onSubmit={handleAddTodo}>
                <InputWithLabel
                    todoTitle={todoTitle}
                    handleTitleChange={handleTitleChange}
                    autoFocus
                >
                    <span>Title: </span>
                </InputWithLabel>
                <button className={style.btn} type="submit">
                    Add
                </button>
            </form>
            <footer>
                <div className={style.footer}>
                    <h6>
                        Coded with Love by{' '}
                        <a
                            href="http://www.rixiobarrios.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Rixio Barrios
                        </a>
                    </h6>
                </div>
            </footer>
        </div>
    );
};

export default AddTodoForm;
