const Book = require('../models/Books');

module.exports = {
  index: async (req, res) => {
    const books = await Book.find({}, '-_id -__v');
    res.status(200).json(books);
  },

  //used try catch to get the mongoose error to test that books don't POST without schema requirements
  newBook: async (req, res) => {
    const newBook = new Book(req.body);
    try {
      const book = await newBook.save();
      res.status(200).json({ book, message: 'Great news, Book was added to Library' });
    } catch (error) {
      res.send(error);
    }
  },

  getBook: async (req, res) => {
    const { bookISBN } = req.params;
    const book = await Book.findOne({ ISBN: bookISBN }, '-_id -__v');

    if (!book) {
      res.status(200).json({ message: "Can't get book, book was not found" });
    }else{
      res.status(200).json(book);
    }
  },

  replaceBook: async (req, res) => {
    const { bookISBN } = req.params;
    const newBook = req.body;
    const replaced = await Book.findOneAndUpdate({ ISBN: bookISBN }, newBook, { new: true });

    if (!replaced) {
      res.status(404).json({ message: "Can't replaced book, book was not found" });
    }else{
      res.status(200).json({ replaced, message: 'Great news, book was replaced' });
    }
  },

  deleteBook: async (req, res) => {
    const { bookISBN } = req.params;
    const removed = await Book.findOneAndRemove({ ISBN: bookISBN });

    if (!removed) {
      res.status(200).json({ message: "Can't delete book, book was not found" });
    }else{
      res.status(200).json({ removed, message: 'Book was deleted!' });
    }
  }

  // getBookCopies: async (req, res, next) => {
  //   const { bookISBN } = req.params;
  //   const book = await Book.findOne({ 'ISBN': bookISBN }, { _id: 0 });

  //   res.status(200).json(book.copies);
  // },

  // newBookCopy: async (req, res, next) => {
  //   const { bookISBN } = req.params;
  //   const newCopy = req.body;
  //   const book = await Book.findOne({ 'ISBN': bookISBN });

  //   book.copies.push(newCopy);
  //   await book.save();
  //   res.status(201).json(newCopy);
  // },

  // getCopy: async (req, res, next) => {
  //   // enforce req.body must have all the fields
  //   const { copyId } = req.params;
  //   const book = await Book.findOne({ 'copies.id': copyId }, { _id: 0, genres: 0, authors: 0, copies: { $elemMatch: { id: copyId } } });
  //   const copy = book.copies[0];

  //   if(!copy) {
  //     return res.status(200).json({ message: 'Copy was not found' });
  //   }
  //   res.status(200).json(copy);
  // },

  // lateBooks: async (req, res, next) => {
  //   const books = await Book.find({ 'copies.status': 'late' },
  //     { _id: 0, genres: 0, authors: 0, copies: { $elemMatch: { status: 'late' } } });
  //   const late = books.reduce((prev, curr) => prev.copies.concat(curr.copies));

  //   if(late.length === 0) {
  //     return res.status(200).json({ message: 'No late Copies was not found' });
  //   }
  //   res.status(200).json(late);
  // },
};
