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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit);
