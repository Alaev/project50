const express = require('express');
const router = express.Router();

const locationsController = require('../../controllers/locations');

router.route('/')
    .get(locationsController.index)
    .post(locationsController.new);

module.exports = router;
