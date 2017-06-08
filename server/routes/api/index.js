const express = require('express');
const router = express.Router();
const books = require('./books');
const copies = require('./copies');
const borrowers = require('./borrowers');
const librarians = require('./librarians');

router.use('/books', books);
router.use('/copies', copies);
router.use('/borrowers', borrowers);
router.use('/librarians', librarians);

module.exports = router;
