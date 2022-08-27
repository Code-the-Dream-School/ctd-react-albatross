## Overview
This sixteen-week project guides students through building a Todo List application with React. There are some basic requirements (see below) but students are encouraged to use their own creativity and ideas to showcase all the skills they have learned throughout the course.

## Requirements
### General
- [ ] Project is published on public GitHub repository
- [ ] Project includes "create-react-app" boilerplate structure
- [ ] Project includes necessary dependencies:
     - [ ] "react-router-dom"
     - [ ] "prop-types"
- [ ] Code compiles without errors
- [ ] Code executes without run-time errors in the browser
- [ ] (Bonus) Code compiles and runs without warnings

### Project Structure
Repository includes `src/` directory with the following structure:

- [ ] `index.js`(application entry-point)
- [ ] `App.js` (root component)
- [ ] `components/` directory with the following files:
     - [ ] `AddTodoForm.js`
     - [ ] `InputWithLabel.js`
     - [ ] `TodoList.js`
     - [ ] `TodoListItem.js`
     - [ ] (Bonus) `TodoContainer.js`
     - [ ] One or more CSS modules associated with the components above

### App Component
`App.js` contains the following:

- [ ] Functional React component named `App`
- [ ] Return statement that renders the following JSX:
     - [ ] Router from "react-router-dom"
     - [ ] Switch component with **two or more** Routes that are navigable
          - [ ] One route for "home" or "landing" page
          - [ ] One or more routes which render a TodoList component
     - [ ] (Bonus) Navigation menu

### TodoContainer Component
> If project is missing (Bonus) `TodoContainer.js`, then apply these requirements to `App.js` instead

`TodoContainer.js` contains the following:

- [ ] Functional React component named `TodoContainer` with one prop: `tableName`
- [ ] Correct `propTypes` for the prop(s) listed
- [ ] State variable named `todoList` with default value of an empty Array (`[]`)
- [ ] State variable named `isLoading` with default value of `true`
- [ ] `useEffect` hook with dependency `tableName` (prop) and callback function that does the following:
     - [ ] Using Fetch API, GET table records from Airtable for the given `tableName`
     - [ ] Parse JSON response
     - [ ] Sort response data by one or more properties
     - [ ] Set `todoList` state to sorted data
     - [ ] Set `isLoading` to `false`
- [ ] Function named `addTodo` with parameter `title` that does the following:
     - [ ] Using Fetch API, POST new record to Airtable with the given `title` field value
     - [ ] Parse JSON response
     - [ ] Set `todoList` state to new Array containing the added record
     - [ ] (Bonus) Re-sort list data
- [ ] Function named `removeTodo` with parameter `id` that does the following:
     - [ ] Using Fetch API, DELETE record from Airtable given `id`
     - [ ] Parse JSON response
     - [ ] Set `todoList` state to new Array NOT containing the removed record
- [ ] Return statement that renders the following JSX:
     - [ ] Heading level-one with dynamic `tableName`
     - [ ] `AddTodoForm` Component
     - [ ] Conditional rendering based on `isLoading` state:
          - [ ] If true, paragraph that reads "Loading..." or some equivalent message
          - [ ] If false, `TodoList` Component

### AddTodoForm Component
`AddTodoForm.js` contains the following:

- [ ] Functional React component named `AddTodoForm` with one prop: `onAddTodo`
- [ ] Correct `propTypes` for the prop(s) listed
- [ ] State variable named `todoTitle` with default value of an empty String (`""`)
- [ ] Function named `handleTitleChange` with parameter `event` that does the following:
     - [ ] Set `todoTitle` to given value from event
- [ ] Function named `handleAddTodo` with parameter `event` that does the following:
     - [ ] Prevent default event behavior (i.e. page refresh)
     - [ ] Invoke callback prop `onAddTodo` and pass `todoTitle` from state
     - [ ] Reset `todoTitle` value to an empty String (`""`)
- [ ] Return statement that renders the following JSX:
     - [ ] Form element with submit event handler
     - [ ] `InputWithLabel` Component
     - [ ] Button element with type "submit"

### InputWithLabel Component
`InputWithLabel.js` contains the following:

- [ ] Functional React component named `InputWithLabel` with three props: `todoTitle`, `handleTitleChange`, and `children`
- [ ] Correct `propTypes` for the prop(s) listed
- [ ] Ref for Input element
- [ ] `useEffect` hook with empty dependency list and callback function that does the following:
     - [ ] Focus input ref
- [ ] Return statement that renders the following JSX:
     - [ ] Label element which renders text from `children` prop
     - [ ] Input element which is configured as a "controlled component" with "value" and "onChange" attributes

### TodoList Component
`TodoList.js` contains the following:

- [ ] Functional React component named `TodoList` with two props: `todoList` and `onRemoveTodo`
- [ ] Correct `propTypes` for the prop(s) listed
- [ ] Return statement that renders the following JSX:
     - [ ] Unordered list element
     - [ ] `map` statement which loops through `todoList` Array and returns `TodoListItem` Component

### TodoListItem Component
`TodoListItem.js` contains the following:

- [ ] Functional React component named `TodoListItem` with two props: `todo` and `onRemoveTodo`
- [ ] Correct `propTypes` for the prop(s) listed
- [ ] Return statement that renders the following JSX:
     - [ ] List-item element
     - [ ] Title from `todo` Object
     - [ ] Button element with text "Remove" and "onClick" event handler

### Styling
> Use of third-party CSS libraries is discouraged for this project, we want to see your understanding of basic CSS concepts like rulesets, properties, and media queries

- [ ] Project includes **at least one** CSS module (though, it is encouraged that you have a different module for each React component)
- [ ] Application follows the style requirements outlines below:
     - [ ] Change the background color of the page body
     - [ ] Change the default text color
     - [ ] Customize the font family
     - [ ] (Bonus) Load in a font family from Google Fonts
     - [ ] (Bonus) Customize style of navigation items
     - [ ] Add spacing (padding/margin) between elements
     - [ ] Change the font size, weight, and color of all headings
     - [ ] Customize input and button styles
     - [ ] Use Media Queries to make sure the application is responsive for all device sizes (mobile, tablet, desktop, etc.)
     - [ ] (Bonus) Add multi-media usage (i.e. iconography)

### Example
Coming soon...