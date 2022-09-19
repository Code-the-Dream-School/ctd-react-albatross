import React from "react"
import TodoListItem from "./TodoListItem";

const TodoList =({todoList, onRemoveTodo}) => { 

    return (
    <div>
      <h1> To Do List</h1>
        {todoList.map((todo ) =>

           <TodoListItem
                key={todo.id}
               title={todo.title}
        
               onRemoveTodo={onRemoveTodo}
           />
        )}
      </div>  
    )
};
    
export default TodoList;
