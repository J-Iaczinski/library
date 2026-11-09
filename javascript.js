const myLibrary = [];

function Book(name, author, pages, isRead) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(name, author, pages, isRead) {
  const creatNewBook = new Book(name, author, pages, isRead);
  return myLibrary.push(creatNewBook);
}

addBookToLibrary('Calculus 2', 'James Stewart', '403', true);
addBookToLibrary('Fundamentals in Physics', 'joao', '222', false);

console.log(myLibrary);

function displayBooks() {
  myLibrary.map((e) => {
    const cardContainer = document.querySelector('.card-container');

    const card = document.createElement('div');
    card.classList = 'card';

    const name = document.createElement('h1');
    name.innerText = e.name;

    const author = document.createElement('p');
    author.innerText = e.author;

    const pages = document.createElement('p');
    pages.innerText = e.pages;

    const deleteBtn = document.createElement('p');
    deleteBtn.innerHTML = 'DELETE';
    deleteBtn.classList = 'delete';

    const bookReadStatus = document.createElement('p');

    if (e.isRead == false) {
      bookReadStatus.classList = 'not-read';
      bookReadStatus.innerText = 'NOT READ';
    } else {
      bookReadStatus.classList = 'read';
      bookReadStatus.innerText = 'READ';
    }

    // appending the books
    cardContainer.appendChild(card);
    card.appendChild(name);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(bookReadStatus);
    card.appendChild(deleteBtn);
  });
}

displayBooks();
