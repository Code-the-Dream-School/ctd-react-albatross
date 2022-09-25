# This lesson will teach you the following

* Sorting
* Reverse Sorting

## Introduction

You may have noticed that the Airtable API returns table records in an arbitrary (random) order by default.

For example, if you have the following list:

* Item 1
* Item 2
* Item 3

The API might return this:

* Item 3 _(how did #3 get up here??)_
* Item 1
* Item 2

How do we fix this so that our list items appear in a more logical order? There are a few possible approaches:

1. Pass the `view` query parameter in the API request
2. Pass the `sort` query parameters (`field` and `direction`) in the API request
3. Use JavaScript to sort the response data from the API

## Instructions

### Sort by Airtable view order

* [ ] Open `TodoContainer.js`
* [ ] Locate the fetch request for retrieving list items from Airtable API
* [ ] At the end of the URL, append a query parameter with name `view` and value `Grid%20view` (or the name of your view in Airtable if you changed it)
  * hint: URL query begins with a question mark (`?`) and is following by name/value pairs separated by an ampersand (`name=value&name=value`)
* [ ] Run your application and view in browser
  * [ ] Verify that the order of list items now matches the order seen in Airtable
  * [ ] In Airtable, open the corresponding table and drag/drop the last record above the first
  * [ ] Refresh your application and verify that the same list item now appears at the top

### Sort by Airtable field

* [ ] Open `TodoContainer.js`
* [ ] Locate the same fetch URL from the previous section
* [ ] At the end of the URL, append the following query parameters (don't forget the `&` delimeter):
  * [ ] `sort[0][field]` with value `Title`
  * [ ] `sort[0][direction]` with value "asc" (short for ascending which means low-to-high or A-to-Z)
* [ ] View your application in browser
  * [ ] Verify that your list items now appear in alphabetical order by "Title"

### Sort with JavaScript

* [ ] Open `TodoContainer.js`

* [ ] Locate the same fetch request from the previous section
* [ ] Inside the final `then` method, start a new line above the existing code
* [ ] Call the `sort` method on `data.records` and pass it a custom callback function:
  * [ ] function should take two parameters: (1) `objectA` and (2) `objectB`
  * [ ] function should compare the `Title` field for each object and return the following:
    * [ ] `-1` if "Title A" is less than "Title B"
    * [ ] `0` if "Title A" and "Title B" are the same
    * [ ] `1` if "Title A" is greater than "Title B"
* [ ] View your application in browser
  * [ ] Verify that your list items still appear in ascending alphabetical order by "Title" (A-to-Z)

Now let's try reversing the order...

* [ ] Update the sort callback function to return the following:
  * [ ] `1` if "Title A" is less than "Title B"
  * [ ] `0` if "Title A" and "Title B" are the same
  * [ ] `-1` if "Title A" is greater than "Title B"
* [ ] View your application in browser
  * [ ] Verify that your list items now appear in descending alphabetical order by "Title" (Z-to-A)

### Stretch Goals

* [ ] Create a toggle button so the user can switch between ascending and descending sort order
* [ ] Sort by a different field, such as `createdTime`
