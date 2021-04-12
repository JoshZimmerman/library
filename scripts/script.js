let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status
}

Book.prototype.toggleRead = function() {
  if (this.status === "read") {
    this.status = "not read";
  } else {
    this.status = "read";
  }
}

//Set up default
const exampleBook1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, "read");
const exampleBook2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1137, "not read");
myLibrary.push(exampleBook1);
myLibrary.push(exampleBook2);

//DOM Objects
const docTitle = document.getElementById("titleInput");
const docAuthor = document.getElementById("authorInput");
const docPages = document.getElementById("pagesInput");
const docRead = document.getElementById("readInput");
const docTable = document.querySelector(".book-table");
const docForm = document.querySelector("form");


function addBookToLibrary() {
  //Takes user input,creates a new book object and adds it to library array
  //add form validation
  let newBook = new Book(docTitle.value, docAuthor.value, docPages.value, docRead.value)
  myLibrary.push(newBook);
}

function populateCollection() {
  docTable.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const tableRow = `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td><button class="toggle-button" data-index="${index}">${book.status}</button></td>
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
  document.querySelector("#titleInput").value = "";
  document.querySelector("#authorInput").value = "";
  document.querySelector("#pagesInput").value = "";
}

function setupToggles() {
  let toggleButtons = document.querySelectorAll(".toggle-button");
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      //get index from id and toggle
      console.log(e.target.dataset.index);
      console.log(e);
      myLibrary[e.target.dataset.index].toggleRead();
      populateCollection();
    });
  });
}

function setupDeletes() {
  let delButtons = document.querySelectorAll(".button-delete");
  delButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log(e.target);
      console.log(e);
      myLibrary.splice(e.target.dataset.indexNumber, 1);
      populateCollection();
    });
  });
}


//Testing
populateCollection();


//Set up Event Listeners
docForm.addEventListener("submit", function(e) {
  e.preventDefault();
  addBookToLibrary();
  populateCollection();
  resetForm();
});

