// Creating the library array
const myLibrary = [];

// Create the book function to create a new book and push in to the library
function Book(name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

const book1 = new Book("The Hobbit", "Tolkiem", "2000", "true");
const book2 = new Book("Rangers", "John Flanagman", "780", "false");

// Function to push the books to the array
function addNewBook(bookName) {
  return myLibrary.push(bookName);
}

console.log(myLibrary);
