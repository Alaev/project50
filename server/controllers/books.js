/*eslint no-unused-expressions: 0*/

const Book = require('../models/Books');

module.exports = {

  index: async (req, res, next) => {
    const books = await Book.find({}, '-_id');
    res.status(200).json(books);
  },

  newBook: async (req, res, next) => {
    const newBook = new Book(req.body);
    const book = await newBook.save();

    res.status(201).json({ message: 'Great news, Book was added to Library' });
  },

  lateBooks: async (req, res, next) => {
    const books = await Book.find({ 'copies.status': 'late' },
      { _id: 0, genres: 0, authors: 0, copies: { $elemMatch: { status: 'late' } } });
    const late = books.reduce((prev, curr) => prev.copies.concat(curr.copies));

    if(late.length === 0) {
      return res.status(200).json({ message: 'No late Copies was not found' });
    }
    res.status(200).json(late);
  },

  getBook: async (req, res, next) => {
    const { bookISBN } = req.params;
    const book = await Book.findOne({ 'ISBN': bookISBN });

    if(!book) {
      return res.status(200).json({ message: 'Can\'t get book, book was not found' });
    }
    res.status(200).json(book);
  },

  // need the full object with all fields of the object
  replaceBook: async (req, res, next) => {
    // enforce req.body must have all the fields
    const { bookISBN } = req.params;
    const newBook = req.body;
    const result = await Book.findOneAndUpdate({ 'ISBN': bookISBN }, newBook);

    if(!result) {
      return res.status(404).json({ message: 'Can\'t replaced book, book was not found' });
    }
    res.status(200).json({ message: 'Great news, book was replaced' });
  },

  deleteBook: async (req, res, next) => {
    const { bookISBN } = req.params;
    const removed = await Book.findOneAndRemove({ 'ISBN': bookISBN });

    if(!removed) {
      return res.status(200).json({ message: 'Can\'t delete book, book was not found' });
    }
    res.status(200).json({ message: 'Book was deleted!' });
  },

  getBookCopies: async (req, res, next) => {
    const { bookISBN } = req.params;
    const book = await Book.findOne({ 'ISBN': bookISBN }, { _id: 0 });

    res.status(200).json(book.copies);
  },

  newBookCopy: async (req, res, next) => {
    const { bookISBN } = req.params;
    const newCopy = req.body;
    const book = await Book.findOne({ 'ISBN': bookISBN });

    book.copies.push(newCopy);
    await book.save();
    res.status(201).json(newCopy);
  },

  getCopy: async (req, res, next) => {
    // enforce req.body must have all the fields
    const { copyId } = req.params;
    const book = await Book.findOne({ 'copies.id': copyId }, { _id: 0, genres: 0, authors: 0, copies: { $elemMatch: { id: copyId } } });
    const copy = book.copies[0];

    if(!copy) {
      return res.status(200).json({ message: 'Copy was not found' });
    }
    res.status(200).json(copy);
  },



};
