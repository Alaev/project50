const express = require('express');
const router = require('express-promise-router')();
const booksController = require('../../controllers/books');

router.route('/')
  .get(booksController.index)
  .post(booksController.newBook);

// router.route('/late')
//   .get(booksController.lateBooks);

// router.route('/:bookISBN')
//   .get(booksController.getBook)
//   .put(booksController.replaceBook)
//   // .patch(booksController.updateBook)
//   .delete(booksController.deleteBook);

// router.route('/:bookISBN/copy')
//   .get(booksController.getBookCopies)
//   .post(booksController.newBookCopy);

// router.route('/:bookISBN/copy/:copyId')
//   .get(booksController.getCopy)
//   .put(booksController.updateBookCopy)
//   .delete(booksController.deleteCopy);

module.exports = router;
