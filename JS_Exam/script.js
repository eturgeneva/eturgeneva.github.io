// Click handler for search button
const captureSearchValue = () => {
    return document.getElementById('search-bar').value;
  };
  
  // Filter books based on search input
  const filterBooks = (string, booksList) => {
    let matches = [];
    let booksArray = flattenObjectValuesIntoArray(booksList);
    for (let i = 0; i < booksArray.length; i++) {
      if (booksArray[i].includes(string)) {
        matches.push(booksList[i]);
        // console.log(i);
      }
      // console.log(booksArray[i]);
    }
    return matches;
  };
  
  // console.log(flattenObjectValuesIntoArray(books));
  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
  const structureBooksAsHtml = (booksList) => {
    let formattedBooks = [];
    for (let i = 0; i < booksList.length; i++) {
      let formattedBook = structureBookAsHtml(booksList[i]);
      formattedBooks.push(formattedBook);
    }
    return formattedBooks;
  //  structureBookAsHtml()
  };
  
  // Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
  const searchBtnClickHandler = (books) => {
    // console.log(captureSearchValue());
    // console.log(filterBooks(captureSearchValue(), books));
    document.getElementById('bookList').innerHTML = '';
    let searchResults = structureBooksAsHtml(filterBooks(captureSearchValue(), books));
    for (let i = 0; i < searchResults.length; i++) {
      document.getElementById('bookList').appendChild(searchResults[i]);
    }
  }
  
  // Grab search button from the DOM
  let searchBtn = document.getElementById('search-btn');
  
  // Attach an event listener to the search button
  searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });