const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const librarianSchema = new Schema({
  ID: {
    type: String,
    validate: {
      validator: v => /[0-9]{9}/.test(v),
      message: 'Invalid ID'
    },
    required: [true, 'ID is required']
  },
  name: {
    first: String,
    last: String
  },
  phone: {
    type: String,
    validate: {
      validator: phoneInput => /^\d{10}$/.test(phoneInput),
      message: 'Invalid phone number'
    }
  },
  email: {
    type: String,
    validate: {
      validator: emailInput => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput),
      message: 'Invalid email address'
    },
    required: [true, 'Email is required']
  }
});

const Librarian = mongoose.model('librarian', librarianSchema);
Librarian.collection.createIndex({ ID: 1 });

module.exports = Librarian;
