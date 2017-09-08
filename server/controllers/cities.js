const City = require('../models/cities');

module.exports = {
    index: (req, res, next) => {
        City.find({})
            .then(Cities => res.status(200).json(Cities))
            .catch(err => next(err));
    },
    new: (req, res, next) => {
        const newCity = new City(req.body);
        newCity.save()
            .then(city => res.status(201).json(city))
            .catch(err => next(err));
    }
};
