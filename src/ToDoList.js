import React from 'react';
import { ToDoListItem } from './ToDoListItem';

export const toDoList = [
    {
      id: 0,
      title: 'complete Albatross 1-1',
    },
    {
      id: 1,
      title: 'wash dishes',
    },
    {
      id: 2,
      title: 'finish notes',
    },
  ];

// the list above is being passed in as props based on app.js, the prop is stored as "list" therefore here we access props.list to access that specific passed in prop and then use .map() to iterate through each item in the array of objects
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