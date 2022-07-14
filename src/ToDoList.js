import React from 'react';
import { ToDoListItem } from './ToDoListItem';

export const toDoList = [
    {
      id: 0,
      title: 'complete Albatross 1-3',
    },
    {
      id: 1,
      title: 'read r2r lesson 1-4',
    },
    {
      id: 2,
      title: 'submit 1-3',
    },
  ];

export const ToDoList = (props) => {
    return (
    <ul>
        {props.list.map((item) => {
            return (
                // passing in each item's id and title stored as props.id and props.todo ***CANNOT store as props.key as this results in an error message
                <ToDoListItem
                    id={item.id}
                    todo={item.title}
                />
            )
        })}
    </ul>
    )
};