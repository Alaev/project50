const express = require('express');
const router = express.Router();

const countriesController = require('../../controllers/countries');

router.route('/')
    .get(countriesController.index)
    .post(countriesController.new);


module.exports = router;
