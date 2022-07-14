import { ToDoListItem } from './ToDoListItem';

export const ToDoList = ({list}) => {
    return (
    <ul>
        {list.map((item) => {
            return (
                // passing in each item's id and title stored as props.id and props.todo ***CANNOT store as props.key as this results in an error message
                <ToDoListItem
                    key={item.id}
                    todo={item.title}
                />
            )
        })}
    </ul>
    )
};