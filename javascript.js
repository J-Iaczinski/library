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

//Form validation and book creation
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const author = document.querySelector('input[name="author"]');
    const title = document.querySelector('input[name="title"]');
    const pages = document.querySelector('input[name="pages"]');
    const read = document.querySelector("#read").value;

    console.log(author, title, pages, read);

    if (
      author.value.trim() === "" ||
      title.value.trim() === "" ||
      pages.value.trim() === "" ||
      read.trim() === ""
    ) {
      alert("You must fill all the inputs");
      return;
    }
    const newBook = new Book(author.value, title.value, pages.value, read);
    addBookToLibrary(newBook);
    form.reset();
    dialog.close();
    displayBooks(newBook);
  });
}

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
