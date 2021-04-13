let myLibrary = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = status
  }
}

//DOM Objects
const docTitle = document.getElementById("titleInput");
const docAuthor = document.getElementById("authorInput");
const docPages = document.getElementById("pagesInput");
const docRead = document.getElementById("readInput");
const docTable = document.querySelector(".book-table");
const docForm = document.querySelector("form");


function checkLocalStorage() {
  if(localStorage.getItem('myLibrary')) {
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
  } else {
    setExampleBooks();
  }
}

function updateLocalStorage() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function setExampleBooks() {
  const exampleBook1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, "read");
  const exampleBook2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1137, "not read");
  myLibrary.push(exampleBook1);
  myLibrary.push(exampleBook2);
}

function addBookToLibrary() {
  //Takes user input,creates a new book object and adds it to library array
  //add form validation
  let newBook = new Book(docTitle.value, docAuthor.value, docPages.value, docRead.value)
  myLibrary.push(newBook);
}

function toggleRead(book) {
  if (book.status === "read") {
    book.status = "not read";
  } else {
    book.status = "read";
  }
}

function populatePageTable() {
  docTable.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const tableRow = `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td><button class="button-toggle" data-index="${index}">${book.status}</button></td>
      <td><button class="button-delete" data-index-number="${index}">delete</button></td>
    </tr>
    `;
    docTable.insertAdjacentHTML("afterbegin", tableRow);
  });
  setupToggles();
  setupDeletes();
  //Save to localStorage
}

function resetForm() {
  docTitle.value = "";
  docAuthor.value = "";
  docPages.value = "";
}

function setupToggles() {
  let toggleButtons = document.querySelectorAll(".button-toggle");
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      toggleRead(myLibrary[e.target.dataset.index]);
      updateLocalStorage();
      populatePageTable();
    });
  });
}

function setupDeletes() {
  let delButtons = document.querySelectorAll(".button-delete");
  delButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      myLibrary.splice(e.target.dataset.indexNumber, 1);
      updateLocalStorage();
      populatePageTable();
    });
  });
}

function runOnLoad() {
  checkLocalStorage();
  populatePageTable();
}

//Testing
runOnLoad();


//Set up Event Listeners
docForm.addEventListener("submit", function(e) {
  e.preventDefault();
  addBookToLibrary();
  updateLocalStorage();
  populatePageTable();
  resetForm();
});

