const express = require('express');
const router = express.Router();

const citiesController = require('../../controllers/cities');

router.route('/')
    .get(citiesController.index)
    .post(citiesController.new);

module.exports = router;
