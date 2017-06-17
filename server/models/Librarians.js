/* eslint no-useless-escape: 0 */
/* eslint func-names: ["off", "as-needed"]*/

const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const LibrarianSchema = new Schema({
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
      validator: emailInput =>
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          emailInput
        ),
      message: 'Invalid email address'
    },
    required: [true, 'Email is required']
  },
  password: String
});

// can't use arrow function, need to keep the context of 'this'.
LibrarianSchema.pre('save', function(next) {
  const librarian = this;

  if (!librarian.isModified('password')) {
    return next();
  }

  return bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    return bcrypt.hash(librarian.password, salt, null, hash => {
      if (err) {
        return next(err);
      }

      librarian.password = hash;
      return next();
    });
  });
});

const Librarian = mongoose.model('librarian', LibrarianSchema);

// Elad and Mor -> Please clarify why do we need to create index here?
// can't we just use the objectID?
Librarian.collection.createIndex({
  ID: 1
});

module.exports = Librarian;
