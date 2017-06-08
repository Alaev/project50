const _ = require('lodash');
const Book = require('../server/models/Books');
const Copy = require('../server/models/Copies');
const Borrower = require('../server/models/Borrowers');
const Librarian = require('../server/models/Librarians');
const booksData = require('./books');
const copiesData = require('./copies');
const borrowersData = require('./borrowers');
const librariansData = require('./librarians');
require('../server/helpers/dbConnect').connect();

function seed(array, Collection) {
  _.forEach(array, function(element) {
    const newElement = new Collection(element);
    newElement.save()
      .then(res => {
        console.log('element added to ' + Collection.collection.collectionName);
      })
      .catch(err => {
        console.log(err.errors);
      });
  });
}

seed(booksData, Book);
seed(borrowersData, Borrower);
seed(librariansData, Librarian);

setTimeout(function() {
  process.exit(0);
}, 1000);
