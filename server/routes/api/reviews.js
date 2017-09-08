const express = require('express');
const router = express.Router();

const reviewsController = require('../../controllers/reviews');

router.route('/')
    .get(reviewsController.index)
    .post(reviewsController.new);

module.exports = router;
