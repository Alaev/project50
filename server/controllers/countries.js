const Country = require('../models/Countries');

module.exports = {
    index: (req, res, next) => {
        Country.find({})
            .then(Countries => res.status(200).json(Countries))
            .catch(err => next(err));
    },
    new: (req, res, next) => {
        const newCountry = new Country(req.body);
        newCountry.save()
            .then(country => res.status(201).json(country))
            .catch(err => next(err));
    }



};
