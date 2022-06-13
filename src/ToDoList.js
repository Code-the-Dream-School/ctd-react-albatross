import React from 'react';

const toDoList = [
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

export const ToDoList = () => {
    return (
    <ul>
        {toDoList.map(function(item) {
          return (
          <li key={item.id}>
            <span>{item.title}</span>
          </li>
          )
        })}
      </ul>
    )
};