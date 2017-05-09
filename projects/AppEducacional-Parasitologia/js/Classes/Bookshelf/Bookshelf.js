'use strict';

Game.Bookshelf = function() {
  var item = scene[2].item;
  var bookTitles = [];

  this.newBook = function(bookName) {
    this[bookName] = new Game.Book(bookName);
    bookTitles.push(bookName);
  }

  this.createItems = function() {
    for (var bookIndex = 0; bookIndex < bookTitles.length; bookIndex++) {
      this[bookTitles[bookIndex]].createItems();
    }
  }

}
