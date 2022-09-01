This lesson will teach you the following:

- React Props
- React State
- Handler Function
- Callback handlers

## Instructions

### Move List Item into New "Todo List Item" Component

- [ ] Inside `/src` directory, create a new file called `TodoListItem.js`
- [ ] Open `/src/TodoListItem.js`
- [ ] Create a new functional React component (see below)
  - [ ] Import `React` from "react" npm package
  - [ ] Declare a function named `TodoListItem`
    - [ ] Export `TodoListItem` function as default module
- [ ] Add a multi-line return statement to your `TodoListItem` function (this is where we will insert JSX)
  - hint: use parenthesis for multi-line return
- [ ] Move list item JSX from `TodoList.js` to `TodoListItem.js` (see below)
  - [ ] Open `/src/TodoList.js`
  - [ ] Cut (copy and remove) the list item element (`<li>`)
  - [ ] Open `/src/TodoListItem.js`
  - [ ] Inside the multi-line return, paste the list item element (`<li>`)
  - [ ] Remove the `key` attribute
- [ ] Refactor `TodoList.js` to use new `TodoListItem` component (see below)
  - [ ] Open `/src/TodoList.js`
  - [ ] Below `React`, import `TodoListItem`
  - [ ] Inside the `map()` method, use the `TodoListItem` component
    - [ ] Pass `key` as a prop equal to the `id` of the `todo` object
    - [ ] Pass `todo` as a prop
- [ ] Update `TodoListItem` component to use props (see below)
  - [ ] Open `/src/TodoListItem.js`
  - [ ] Add `props` as a parameter in the `TodoListItem` function
  - [ ] Update the `todo` object reference to come from `props`
- [ ] Run your application and view in browser
  - [ ] Verify that your Todo List still appears correctly

### Handle "Add Todo Form" Submit

- [ ] Open `/src/AddTodoForm.js`
- [ ] Add a `name` attribute to the text input with value `title`
- [ ] Inside the `AddTodoForm` functional component, above the `return` statement, create a new function called `handleAddTodo` that takes `event` as a parameter
  - [ ] First, inside this function, prevent the default behavior of the form submit
    - hint: `preventDefault` method
  - [ ] Next, retrieve the value of the `title` element from the event target and store it in a variable named `todoTitle`
  - [ ] Log the value of `todoTitle` in the console
  - [ ] Finally, reset the form so the text input value is cleared
- [ ] Add `onSubmit` prop to form element and pass the `handleAddTodo` function by reference
- [ ] View your application in browser
- [ ] Enter a value in the text input and submit the form
  - [ ] Verify that the value you entered is visible in the console
  - [ ] Verify that form is cleared properly

### Store "New Todo" in React State

- [ ] Open `/src/App.js`
- [ ] Inside the `App` functional component, above the `return` statement, create a new state variable named `newTodo` with update function named `setNewTodo`
  - hint: `useState` hook
- [ ] Below the `<AddTodoForm />` component, add a paragraph element that displays the value of `newTodo` variable
- [ ] Pass `setNewTodo` as a callback handler prop named `onAddTodo` to the `AddTodoForm` component
- [ ] Open `/src/AddTodoForm.js`
- [ ] Add `props` as a parameter in the `AddTodoForm` function
- [ ] Inside the `handleAddTodo` function, invoke the `onAddTodo` callback prop and pass `todoTitle` as an argument
- [ ] View your application in browser
- [ ] Enter a value in the text input and submit the form
  - [ ] Verify that the value you entered is visible beneath the form
