// Click handler for search button
const captureSearchValue = () => {
    return document.getElementById('search-bar').value;
  };
  
  // Filter books based on search input
  const filterBooks = (string, booksList) => {
    let booksArray = flattenObjectValuesIntoArray(booksList);
    for (let i = 0; i < booksArray.length; i++) {
      if (booksArray[i].includes(string)) {
        console.log(i);
      }
      // console.log(booksArray[i]);
    }
  };
  
  // console.log(flattenObjectValuesIntoArray(books));
  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
  const structureBooksAsHtml = () => {
   structureBookAsHtml()
  };
  
  // Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
  const searchBtnClickHandler = (books) => {
    // console.log(captureSearchValue());
    filterBooks(captureSearchValue(), books);
    structureBooksAsHtml();
  }
  
  // Grab search button from the DOM
  let searchBtn = document.getElementById('search-btn');
  
  // Attach an event listener to the search button
  searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });