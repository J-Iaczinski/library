const myLibrary = [];

const createBook = document.getElementById("plus");
const dialog = document.querySelector("dialog");
const cancel = document.querySelector("#cancel");

if (createBook) {
  createBook.addEventListener("click", (e) => {
    dialog.showModal();
  });
}

if (cancel) {
  cancel.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
  });
}

// Creates the Book obj
function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
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

function displayBooks(e) {
  const container = document.querySelector(".card-container");
  const createCard = document.querySelector(".card.create");

  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("div");
  title.className = "title";
  title.textContent = e.title;

  const author = document.createElement("div");
  author.className = "author";
  author.textContent = e.author;

  const rodape = document.createElement("div");
  rodape.className = "rodape";

  const pages = document.createElement("div");
  pages.className = "pages";
  pages.textContent = e.pages;

  const status = document.createElement("div");
  status.className = "status";
  status.textContent = e.status;

  rodape.append(pages, status);

  card.append(title, author, rodape);

  container.insertBefore(card, createCard);
}
