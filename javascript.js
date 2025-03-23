// Creating the library array
const myLibrary = [];

// Create the book function to create a new book
function Book(name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

// Function to push the books to the array
function addNewBook(bookName) {
  return myLibrary.push(bookName);
}

// Show the current library in the page
function displayBook(e) {
  const container = document.querySelector(".card-container");
  const lastCard = container.querySelector(".card");

  const newCard = document.createElement("div");
  newCard.className = "card";

  const newRoda = document.createElement("div");
  newRoda.className = "rodape";

  const name = document.createElement("p");
  name.className = "name";
  name.textContent = e.name;

  const author = document.createElement("p");
  author.className = "author";
  author.textContent = e.author;

  const read = document.createElement("p");
  if (e.isRead === "false") {
    read.className = "notRead";
    read.textContent = "NOT READ";
  } else {
    read.className = "read";
    read.textContent = "READ";
  }
  newRoda.append(read);

  const pages = document.createElement("p");
  pages.className = "pages";
  pages.textContent = e.pages;

  newRoda.append(pages);

  newCard.append(name);
  newCard.append(author);
  newCard.append(newRoda);

  container.insertBefore(newCard, lastCard);
}

// getting the form and modals elements
const form = document.querySelector(".formdialog");
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".open-dialog");
const closeModal = document.querySelector(".close-modal");

// opening and closing the modal
openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
  form.reset();
});

//when form is submited get the informations and validate the inputs
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.querySelector('input[name="title"]');
  const author = document.querySelector('input[name="author"]');
  const pages = document.querySelector('input[name="pages"]');
  const readValue = document.getElementById("read").value;
  if (
    title.value.trim() === "" ||
    author.value.trim() === "" ||
    pages.value.trim() === ""
  ) {
    alert("Please fill out all fields before submitting.");
    return; // Don’t continue if any field is empty
  }
  const newBook = new Book(title.value, author.value, pages.value, readValue);
  addNewBook(newBook);
  form.reset();
  modal.close();
  displayBook(newBook);
  console.log(readValue);
});
