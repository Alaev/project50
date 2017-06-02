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

module.exports = router;
