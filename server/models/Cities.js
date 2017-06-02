const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    id: Number,
    countryId: Number,
    name: String,
});

const City = mongoose.model('city', CitySchema);

module.exports = City;


