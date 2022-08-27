This lesson will teach you the following:

- Side-effects
- Custom Hooks
- Fragments

## Instructions

### Save Todo List in Storage

So far you've built a todo list that allows you to add as many new items as you want, but what happens when you refresh the page? The list disappears!

In this lesson, you will learn how to save your list in local browser storage so it persists between page loads.

- [ ] Open `/src/App.js`
- [ ] Define a `useEffect` React hook with `todoList` as a dependency
- [ ] Inside the side-effect handler function, save the `todoList` inside `localStorage` with the key `"savedTodoList"`
    - Hint: `localStorage.setItem` method
- [ ] Run your application and view in browser
    - [ ] Enter a new todo in "Add Todo" form and submit
    - [ ] Open your Local Storage panel in the DevTools
        - In Chrome: DevTools > Application > Local Storage > localhost
    - [ ] Verify that your `"savedTodoList"` item exists
    - [ ] Notice that the value, however, is not readable (see below)

![local storage object](https://github.com/Code-the-Dream-School/ctd-react-egret/raw/main/instructions/assets/section-1/lesson-1-5/local-storage-object.png)

- [ ] Open `/src/App.js`
- [ ] Update your side-effect function to convert `todoList` to a string before saving in `localStorage`
    - Hint: `JSON.stringify` method
- [ ] View your application in browser
    - [ ] Clear your Local Storage
        - In Chrome: DevTools > Application > Storage > Click "Clear site data"
    - [ ] Repeat the same steps from above
    - [ ] Notice that the value is completely readable as a string (see below)

![Local Storage with List saved as Object](https://github.com/Code-the-Dream-School/ctd-react-egret/raw/main/instructions/assets/section-1/lesson-1-5/local-storage-string.png)

Now your list is saved in Local Storage, but when you refresh the page? It still disappears!

This is because we wrote the list data to Local Storage but we aren't reading it when the application is rendered. Let's fix that:

- [ ] Open `/src/App.js`
- [ ] Update the default state for `todoList` to read your `"savedTodoList"` item from `localStorage`
    - Hint: `localStorage.getItem` method
- [ ] View your application in browser
    - [ ] Notice that there is an error, `todoList` is not an Array

How could our list not be an Array? Right! We turned it into a string before saving in Local Storage. So now that we're ready to use the value, we need to turn it back into an Array.

- [ ] Open `/src/App.js`
- [ ] Update your default state to parse the value of the `"savedTodoList"` item
    - Hint: `JSON.parse` method
- [ ] View your application in browser
    - [ ] Notice that your previous todo item(s) are still visible after refreshing the page

### Create Custom Hook

- [ ] Open `/src/App.js`
- [ ] Above the `App` functional component, create a new function named `useSemiPersistentState` which will be a custom hook
- [ ] Cut (copy/remove) the `useState` and `useEffect` hooks from `App` into `useSemiPersistentState`
- [ ] Add a `return` statement in `useSemiPersistentState` that returns the `todoList` state variable and setter in an Array (just like how it's returned from the `useState` hook)
- [ ] Update `App` to use the new custom hook
    - Hint: Copy the `useState` hook from before, but change `useState` to the custom hook `useSemiPersistentState` (no arguments)
- [ ] View your application in browser
    - [ ] Verify that your Todo List still appears correctly

### Fragments

- [ ] Open `/src/App.js` and update the JSX to use a Fragment

**Final Result**
![Result of Lesson 1.5 work](https://github.com/Code-the-Dream-School/ctd-react-egret/raw/main/instructions/assets/section-1/lesson-1-5/result.png)