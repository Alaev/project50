const router = require('express-promise-router')();
const librariansController = require('../../controllers/librarians');

// router.route('/').get(booksController.index).post(booksController.newBook);

// router.route('/late')
//   .get(booksController.lateBooks);

router
  .route('/register')
  // .get(booksController.getBook)
  .post(librariansController.newLibrarian)
  // .patch(booksController.updateBook)
  // .delete(booksController.deleteBook);

// router.route('/:bookISBN/copy')
//   .get(booksController.getBookCopies)
//   .post(booksController.newBookCopy);

// router.route('/:bookISBN/copy/:copyId')
//   .get(booksController.getCopy)
//   .put(booksController.updateBookCopy)
//   .delete(booksController.deleteCopy);

module.exports = router;
