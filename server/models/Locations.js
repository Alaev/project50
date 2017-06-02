const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    id: Number,
    hero: String,
    name: String,
    description: String,
    maxGuests: Number,
    countryId: Number,
    cityId: Number,
    lat: Number,
    long: Number,
    imageUrl: String,
    price: Number

});

const Location = mongoose.model('location', LocationSchema);

module.exports = Location;

