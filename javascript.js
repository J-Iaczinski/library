const myLibrary = [];

// Creates the Book obj
function Book(title, author, year, status) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.status = status;
  this.id = crypto.randomUUID();
}

// Function to add the book to the library array
function addBookToLibrary(bookName) {
  return myLibrary.push(bookName);
}

//Only for layout tests
const newBook = new Book("Teste 1", "Autor 1", 1999, true);
const newBook2 = new Book("Teste 2", "Autor 2", 1999, false);
const newBook3 = new Book("Teste 3", "Autor 3", 1999, true);

addBookToLibrary(newBook);
addBookToLibrary(newBook2);
addBookToLibrary(newBook3);
