The captureSearchValue function captures the search bar input value and returns it.

The filterBooks() function takes in a search string and a list of books as parameters and returns all of the books that contain an exact match of the search input as an array of objects. Objects in this array should be formatted as books with title, author, and tags properties, similar to the original books array. It should use the flattenObjectValuesIntoArray() function to search all fields within a book object easily.

The structureBooksAsHtml() function takes a list of books as a parameter, iterates over the list, formats them as HTML using the structureBookAsHtml() helper function, and returns an array of formatted book elements.

The searchBtnClickHandler() function is triggered when a user clicks the search button. It takes in a list of books as a parameter and integrates the individual functions that make up the app to render a list of books to the DOM that matches the search input when the search button is clicked.