const Review = require('../models/reviews');

module.exports = {
    index: (req, res, next) => {
        Review.find({})
            .then(Reviews => res.status(200).json(Reviews))
            .catch(err => next(err));
    },
    new: (req, res, next) => {
        const newReview = new Review(req.body);
        newReview.save()
            .then(review => res.status(201).json(review))
            .catch(err => next(err));
    }



};
