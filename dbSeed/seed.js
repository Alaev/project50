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

function seedCollection(array, col) {
  console.log('seeding ' + col.collection.collectionName);
  col.insertMany(array)
    .then(data => console.log('added ' + data.length + ' ' + col.collection.collectionName));
}

function seedCopies(dataBooks, dataCopies) {
  _.forEach(dataCopies, function (element, i, arr) {
    Book.findOne({ ISBN: element.ID.split("-")[0] })
      .then(book => {
        const copy = new Copy({ book: book._id, ID: element.ID, status: 'available' })
        copy.save()
          .then(() => book.copies.push(copy._id))
          .then(() => book.save())
          .then(() => console.log('copy added'))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
    });
}

seedCollection(borrowersData, Borrower);
seedCollection(librariansData, Librarian);
seedCollection(booksData, Book);

setTimeout(function() {
  seedCopies(booksData, copiesData);
  setTimeout(function() {
    process.exit(0);
  }, 1000);
}, 1000);

