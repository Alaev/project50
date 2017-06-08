//db.getCollection('books').insert(array)
const Book = require('../server/models/Books');
const _ = require('lodash');
require('../server/helpers/dbConnect').connect();
const booksData = require('./books');


function seed(array) {
	_.forEach(function (element) {

		const newElement = new Book(element);
		newElement.save()
			.then(res => {
				console.log('book added');
			})
			.catch(err => {
				next(err);
			});

	});
}
seed(booksData);


setTimeout(function () {

	process.exit(0);

}, 1000);
