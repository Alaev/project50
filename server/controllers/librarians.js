var Librarian = require('../models/Librarians');

module.exports = {

  index: async (req, res, next) => {
    const librarians = await Librarian.find({}, '-_id');
    res.status(200).json(librarians);
  },

  newLibrarian: async (req, res, next) => {
    const newLibrarian = new Librarian(req.body);
    const librarian = await newLibrarian.save();

    res.status(201).json({ message: 'Great news, Librarian was added to Library' });
  },

  getLibrarian: async (req, res, next) => {
    const { librarianID } = req.params;
    const librarian = await Librarian.findOne({ 'ID': librarianID });
    res.status(200).json(librarian);
  },

  replaceLibrarian: async (req, res, next) => {
    // enforce req.body must have all the fields
    const { librarianID } = req.params;
    const newLibrarian = req.body;
    const result = await Librarian.findOneAndUpdate({ 'ID': librarianID }, newLibrarian);

    if(!result) {
      return res.status(404).json({ message: 'Can\'t replaced librarian, librarian was not found' });
    }
    res.status(200).json({ message: 'Great news, librarian was replaced' });
  },

  deleteLibrarian: async (req, res, next) => {
    const { librarianID } = req.params;
    const removed = await Librarian.findOneAndRemove({ 'ID': librarianID });

    if(!removed) {
      return res.status(200).json({ message: 'Can\'t delete librarian, librarian was not found' });
    }
    res.status(200).json({ message: 'Librarian was deleted!' });
  }

};
