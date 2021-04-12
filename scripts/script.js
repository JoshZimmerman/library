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

function addBookToLibrary(book) {
  //Takes user input,creates a new book object and adds it to library array
  
  myLibrary.push(book);
}


const exampleBook1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, "read");
const exampleBook2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1137, "not read");
myLibrary.push(exampleBook1);
myLibrary.push(exampleBook2);

const docTable = document.querySelector(".book-table");

function populateCollection() {
  myLibrary.forEach((book) => {
    const tableRow = `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.status}</td>
      <td><button class="button-primary">delete</button></td>
    </tr>
    `;
    docTable.insertAdjacentHTML("afterbegin", tableRow);
  });
}
populateCollection();