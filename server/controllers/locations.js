const Location = require('../models/Locations');

module.exports = {
    index: (req, res, next) => {
        Location.find({})
            .then(locations => res.status(200).json(locations))
            .catch(err => next(err));
    },
    new: (req, res, next) => {
        const newLocation = new Location(req.body);
        newLocation.save()
            .then(location => res.status(201).json(location))
            .catch(err => next(err));
    }



};
