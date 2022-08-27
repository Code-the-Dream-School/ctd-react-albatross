     🏗️ Work in Progress...

This lesson will teach you the following:
* Airtable
* Data Fetching

## Instructions

### Setup Airtable
1. Sign up (or login) for an Airtable account: https://airtable.com/signup
2. Create a new base
3. Choose a Title, Icon, and Color for your base
4. Rename "Table 1" to "Default"
5. Within the table, rename the first column to "Title" and delete the other columns
6. Add one or more todo items to the table
### Create Environment File
1. Open code editor
2. Create a new file named `.env.local` in the root directory
> `dotenv` files use the syntax `VARIABLE=value` (See official rules)

### Generate Airtable API Key
1. Navigate to https://airtable.com/account
2. Click "Generate API Key"
3. Copy the key from the input field
4. Open `.env.local`
5. Create a new variable named `REACT_APP_AIRTABLE_API_KEY`
6. Paste the key as its value
### Connect to Airtable API
1. Click "Help" button
2. Click "API Documentation" link
3. Copy the "Base ID"
4. Open `.env.local`
5. Create a new variable named `REACT_APP_AIRTABLE_BASE_ID`
6. Paste the ID as its value
### Fetch Data from Airtable
- [ ] Open `src/App.js`
- [ ] Inside the first `useEffect` hook, replace the placeholder `Promise` with the following...
- [ ] Using the Fetch API, create a "GET" request and pass the necessary arguments:
     - url: the url of your request (in this case, `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default` note that we need to use `process.env...` to get env variables and remember that you need to use back-ticks and a dollar sign to do string formatting (see [Using Fetch - Web APIs | MDN (Supplying request options section)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for a reminder if needed)
     - options: the object of additional request options
- [ ] In the `fetch` options object, add the property `headers` as an object with the following property:
     - Authorization: the token to authorize the request (in this case "Bearer {API_KEY}" where `{API_KEY}` is replaced with the corresponding environment variable)
- [ ] Chain a `then` method to your fetch call and pass it a function that returns the response JSON data
- [ ] Update the `setToDoList` call to reference the new result format (hint: `result.records`)
- [ ] Open `src/TodoListItem.js`
- [ ] Update the todo item title to reference the new object format (hint: `todo.fields.Title`)
### Write Data to Airtable
Coming soon...