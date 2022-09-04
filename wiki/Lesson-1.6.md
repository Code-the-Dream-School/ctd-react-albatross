This lesson will teach you the following:

- Reusable Components
- Component Composition
- Imperative React
- Inline Handler

## Instructions

### Create Reusable Input with Label Component

- [ ] Inside `/src` directory, create a new file called `InputWithLabel.js`
- [ ] Open `/src/InputWithLabel.js`
- [ ] Declare and export a new functional React component named `InputWithLabel`
- [ ] Move label and input JSX from `AddTodoForm.js` to `InputWithLabel.js` (see below)
  - [ ] Open `/src/AddTodoForm.js`
    - [ ] Cut (copy and remove) the label and input elements
    - [ ] Open `/src/InputWithLabel.js`
    - [ ] Inside the multi-line return, paste the elements you copied (hint: use a Fragment)
    - [ ] Add `props` as a parameter in the `InputWithLabel` function
    - [ ] Update `todoTitle` and `handleTitleChange` references to come from `props`
- [ ] Refactor `AddTodoForm.js` to use new `InputWithLabel` component and pass the necessary props
- [ ] Run your application and view in browser
  - [ ] Verify that your "Add Todo Form" still appears correctly

Great, now we have a reusable component! But what if we wanted to reuse this "Input with Label" in a different form? The "Label" is hard-coded as "Title" which isn't very reusable. Let's fix that:

- [ ] Open `/src/InputWithLabel.js`
- [ ] Replace the text inside the label element with a new `props` variable named `label`
- [ ] Open `/src/AddTodoForm.js`
- [ ] Pass a `label` prop to the `InputWithLabel` component with value `"Title"`
- [ ] View your application in browser
  - [ ] Verify that your "Add Todo Form" still appears correctly

![To-Do Application with Reusable Component](https://github.com/Code-the-Dream-School/ctd-react-egret/wiki/assets/lesson-1-6/reusable-component.png)

### Refactor Input with Label to use Component Composition

- [ ] Open `/src/InputWithLabel.js`
- [ ] Replace `label` prop with `children` so that any child node(s) are used as the label text
- [ ] Open `/src/AddTodoForm.js`
- [ ] Refactor the `InputWithLabel` component
  - [ ] Remove the `label` prop
  - [ ] Change the component to have an open/close tag instead of being self-closing
  - [ ] Pass the text `Title` inside the component tags
- [ ] View your application in browser
  - [ ] Verify that your "Add Todo Form" still appears correctly

### Add Auto-Focus to Input

- [ ] Open `/src/InputWithLabel.js`
- [ ] Add `autoFocus` prop to input element
- [ ] View your application in browser
  - [ ] Verify that input element is focused on page load

![To-Do Application with Focused Input](https://github.com/Code-the-Dream-School/ctd-react-egret/wiki/assets/lesson-1-6/imperative-focus.png)

Now the input is focused automatically, but what happens when you submit the "Add Todo" form? Focus is lost! Let's update our code so the input element is focused on every render:

- [ ] Open `/src/InputWithLabel.js`
- [ ] Use the `useRef` React hook to create an imperative ref named `inputRef`
- [ ] Define a `useEffect` React hook with an empty dependency list
- [ ] Inside the side-effect handler function, call the `focus()` method on the current `inputRef`
- [ ] Remove the `autoFocus` prop on the input element
- [ ] Add a `ref` prop with value `inputRef` on the input element
- [ ] View your application in browser
  - [ ] Verify that input element is focused on page load
  - [ ] Enter a new todo in "Add Todo" form and submit
  - [ ] Verify that input element is re-focused automatically

### Add "Remove" Button to List Items

- [ ] Open `/src/TodoListItem.js`
- [ ] Add a button element, type "button", inside the list item with text "Remove"
- [ ] Open `/src/App.js`
- [ ] Define a new handler function named `removeTodo` with parameter `id`
  - [ ] Inside this function, remove the item with the given `id` from `todoList`
    - hint: `filter` or `splice` methods
  - [ ] Call the `setTodoList` state setter and pass the new or modified Array
- [ ] Pass `removeTodo` as a callback handler prop named `onRemoveTodo` to the `TodoList` component
- [ ] Open `/src/TodoList.js`
- [ ] Pass `onRemoveTodo` prop as a callback handler prop named `onRemoveTodo` to the `TodoListItem` component
- [ ] Open `/src/TodoListItem.js`
- [ ] Add an `onClick` prop to the button element and pass a function that calls `onRemoveTodo` from props with the current item id as an argument
- [ ] View your application in browser
  - [ ] Click the "Remove" button next to any list item
  - [ ] Verify that the corresponding item is removed from the list
  - [ ] Refresh the page and verify that the item is still removed

![To-Do Application with Remove Buttons](https://github.com/Code-the-Dream-School/ctd-react-egret/wiki/assets/lesson-1-6/remove-handler.png)
