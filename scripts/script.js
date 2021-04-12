let myLibrary = [];

function Book(title, author, pages, hasRead) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.hasRead = hasRead
}

Book.prototype.toggleRead = function() {
  if (this.hasRead) {
    this.hasRead = false;
  } else {
    this.hadRead = true;
  }
}

function addBookToLibrary(book) {
  //Takes user input,creates a new book object and adds it to library array
  
  myLibrary.push(book);
}

const exampleBook1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, "read");
const exampleBook2 = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 1137, "not read");

