var Borrower = require('../models/Borrowers');

module.exports = {

  index: async (req, res, next) => {
    const borrowers = await Borrower.find({}, '-_id');
    res.status(200).json(borrowers);
  },

  newBorrower: async (req, res, next) => {
    const newBorrower = new Borrower(req.body);
    const borrower = await newBorrower.save();

    res.status(201).json({ message: 'Great news, Borrower was added to Library' });
  },

  getBorrower: async (req, res, next) => {
    const { borrowerID } = req.params;
    const borrower = await Borrower.findOne({ 'ID': borrowerID });
    res.status(200).json(borrower);
  },

  replaceBorrower: async (req, res, next) => {
    // enforce req.body must have all the fields
    const { borrowerID } = req.params;
    const newBorrower = req.body;
    const result = await Borrower.findOneAndUpdate({ 'ID': borrowerID }, newBorrower);

    if(!result) {
      return res.status(404).json({ message: 'Can\'t replaced borrower, borrower was not found' });
    }
    res.status(200).json({ message: 'Great news, borrower was replaced' });
  },

  deleteBorrower: async (req, res, next) => {
    const { borrowerID } = req.params;
    const removed = await Borrower.findOneAndRemove({ 'ID': borrowerID });

    if(!removed) {
      return res.status(200).json({ message: 'Can\'t delete borrower, borrower was not found' });
    }
    res.status(200).json({ message: 'Borrower was deleted!' });
  }

};
