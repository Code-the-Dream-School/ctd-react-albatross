     🏗️ Work in Progress...

This lesson will teach you the following:
* React Router

## Instructions
### Install React Router
> If you're using NPM, run `npm install react-router-dom` instead

     yarn add react-router-dom 

Read documentation: https://reactrouter.com/web/guides/quick-start

### Setup Router
- [ ] Open `src/App.js`
- [ ] Import `BrowserRouter`, `Routes`, and `Route` from `react-router-dom`
- [ ] Wrap existing JSX within new `BrowserRouter` component
- [ ] Inside `BrowserRouter`, wrap existing JSX within new `Routes` component
- [ ] Inside `Routes`, wrap existing JSX within new `Route` component with prop `path` equal to the root path (`"/"`) and prop `exact`
     - note: the `path` prop will match any url that starts with the given string, so "/" will match all other urls ("/one", "/one/two", and so on) unless we specify that it must be an exact match using the `exact` prop
- [ ] Run your application and view in browser
     - [ ] Verify that your Todo List still appears correctly
### Add New Route
- [ ] Open `src/App.js`
- [ ] Below the `Route` component, create a new `Route` with path `"/new"`
- [ ] Inside the `Route` component, create a level-one heading with text "New Todo List"
- [ ] Run your application and view in browser
     - [ ] Verify that your Todo List still appears correctly
     - [ ] Navigate to http://localhost:3000/new
     - [ ] Verify that your New Todo List heading appears