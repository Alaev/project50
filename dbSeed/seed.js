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

//old
// function seed(array, Collection) {
  //   _.forEach(array, function(element, i, arr) {
  //     const newElement = new Collection(element);
  //     newElement.save()
  //       .then(res => {);
  //           console.log("now seeding copies");
  //         }
  //       })
  //       .catch(err => {
  //         console.log(err.errors);
  //       });
  //   });
// }

function seedCollection(array, col) {
  console.log('seeding ' + col.collection.collectionName);
  col.insertMany(array)
    .then(v => console.log('added ' + v.length + ' ' + col.collection.collectionName));
}

async function seedBooksAndCopies(dataBooks, dataCopies) {
  // console.log("seeding books");
  // let books = await Book.insertMany(dataBooks);//.then(res => seedCopies(copiesData));
  // console.log(books.length + 'books', books);
  // console.log("seeding copies");

  _.forEach(dataCopies, function (element, i, arr) {
    Book.findOne({ ISBN: element.ID.split("-")[0] })
      .then(book => {
        const copy = new Copy({ book: book._id, ID: element.ID, status: 'available' })
        copy.save()
          .then(() => book.copies.push(copy._id))
          .then(() => book.save())
          .then(() => console.log('copy saved'))
          .catch(err => console.log(err))
      })
      .catch(err => console.log(err))
    });
}

seedCollection(borrowersData, Borrower);
seedCollection(librariansData, Librarian);
seedCollection(booksData, Book);

setTimeout(function() {
  seedBooksAndCopies(booksData, copiesData);
  setTimeout(function() {
    process.exit(0);
  }, 1000);
}, 1000);
// Book.insertMany(booksData)
//   .then(() => Borrower.insertMany(borrowersData))
//   .then(() => seedCopies(copiesData))
//   .then(() => Librarian.insertMany(librariansData))
//   .catch(err => console.log(err))

// Book.insertMany(booksData)
//   .then(() => {
//     console.log('done books');
//     seedCollection(borrowersData, Borrower)
//     seedCollection(librariansData, Librarian)
//     seedCopies(copiesData);
//   })

