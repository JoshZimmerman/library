//Example Object Constructor from TOP-JavaScript-Objects and Objects Constructors
function Book(title, author, pages, hasRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.hasRead = hasRead
  this.info = function() {
    let readText = ''
    if (hasRead === true) {
      readText = 'finished reading'
    } else {
      readText = 'not read yet'
    }
    return `${title}, by ${author}, ${pages} pages, ${readText}`
  }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());

