const express = require('express');
const router = express.Router();

const books = require('./books');
const borrowers = require('./borrowers');

router.use('/books', books);
router.use('/borrowers', borrowers);

module.exports = router;
