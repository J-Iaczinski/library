let myLibrary = [];

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
addBookToLibrary('Warcraft III', 'Blizard', '356', false);

console.log(myLibrary);

function displayBooks() {
  const cardContainer = document.querySelector('.card-container');
  cardContainer.innerHTML = '';

  myLibrary.map((e) => {
    const card = document.createElement('div');
    card.classList = 'card';

    const name = document.createElement('h1');
    name.innerText = e.name;

    const author = document.createElement('p');
    author.innerText = e.author;

    const pages = document.createElement('p');
    pages.innerText = e.pages;

    const deleteBtn = document.createElement('p');
    deleteBtn.id = e.id;
    deleteBtn.innerHTML = 'DELETE';
    deleteBtn.classList = 'delete';

    deleteBtn.addEventListener('click', () => {
      myLibrary = deleteBook(myLibrary, e.id);
      displayBooks();
    });

    const bookReadStatus = document.createElement('p');
    bookReadStatus.classList = 'status';

    updateReadStatus(bookReadStatus, e.isRead);

    bookReadStatus.addEventListener('click', () => {
      e.isRead = !e.isRead;
      updateReadStatus(bookReadStatus, e.isRead);
    });

    // appending the books
    cardContainer.append(card);
    card.appendChild(name);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(bookReadStatus);
    card.appendChild(deleteBtn);
  });
}

function handleModal() {
  const modal = document.querySelector('dialog');
  const btn = document.querySelector('.btn-plus');
  const submitBtn = document.querySelector('#submit-btn');
  const closeBtn = document.querySelector('#close-btn');

  closeBtn.addEventListener('click', () => {
    modal.close();
  });

  btn.addEventListener('click', () => {
    modal.showModal();
  });

  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const bookName = document.getElementById('newBook').value;
    const author = document.getElementById('newAuthor').value;
    const pages = document.getElementById('newPages').value;
    let status = document.getElementById('readStatus').value;

    if (status === 'read') {
      status = true;
    } else {
      status = false;
    }

    addBookToLibrary(bookName, author, pages, status);
    displayBooks();

    modal.close();

    document.querySelector('form').reset();
  });
}

displayBooks();
handleModal();

function updateReadStatus(e, isRead) {
  if (!isRead) {
    e.classList = 'not-read';
    e.innerText = 'NOT READ';
  } else {
    e.classList = 'read';
    e.innerText = 'READ';
  }
}

function deleteBook(arr, id) {
  return arr.filter((book) => book.id !== id);
}
