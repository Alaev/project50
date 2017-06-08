const express = require('express');

// Using this router for async await as we dont want to write try catch all the time
const router = require('express-promise-router')();
const booksController = require('../../controllers/copies');


router.route('/')
	.get(booksController.index)
	.post(booksController.newBook);

router.route('/late')
	.get(booksController.lateBooks);

router.route('/:copyID')
	.get(booksController.getBook)
	.put(booksController.replaceBook)
	// .patch(booksController.updateBook)
	.delete(booksController.deleteBook);

module.exports = router;

