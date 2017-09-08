<<<<<<< HEAD
const router = require('express-promise-router')();
const books = require('./books');
// const copies = require('./copies');
// const borrowers = require('./borrowers');
// const librarians = require('./librarians');

router.use('/books', books);
// router.use('/copies', copies);
// router.use('/borrowers', borrowers);
// router.use('/librarians', librarians);
=======
const express = require('express');
const router = express.Router();

const locations = require('./locations');
const cities = require('./cities');
const reviews = require('./reviews');
const countries = require('./countries');

router.use('/locations', locations);
router.use('/cities', cities);
router.use('/reviews', reviews);
router.use('/countries', countries);
>>>>>>> 32bb0be... init commit

module.exports = router;
