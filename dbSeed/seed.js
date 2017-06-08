//db.getCollection('books').insert(array)
const Book = require('../server/models/Books');
const Copy = require('../server/models/Copies');
const Borrower = require('../server/models/Borrowers');
const Librarian = require('../server/models/Librarians');

const _ = require('lodash');
require('../server/helpers/dbConnect').connect();
const booksData = require('./books');
const copiesData = require('./copies');
const borrowersData = require('./borrowers');
const librariansData = require('./librarians');

function seedBooks(array) {
	_.forEach(array, function (element) {
		const newElement = new Book(element);
		newElement.save()
			.then(res => {
				console.log('book added');
			})
			.catch(err => {
				console.log(err);
			});
	});
}

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

// function seedCopies(array) {
//     _.forEach(array, function(element) {
// 				const book = Book.findOne({ISBN: element.ID.split("-")[0]})
//         const newCopy = new Copy(element);
// 				book.copies.push(newCopy);
//         newCopy.book = book;

//         Promise.all([book.save(), newCopy.save()])
//             .then(res => {
//                 console.log('element added to copies');
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     });
// }


seed(booksData, Book);
seed(borrowersData, Borrower);
seed(librariansData, Librarian);
// seedCopies(copiesData, Copy);

setTimeout(function () {

	process.exit(0);

}, 1000);
