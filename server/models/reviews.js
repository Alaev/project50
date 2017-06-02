const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    id: Number,
    locationId: Number,
    title: String,
    content: String,
    rating: Number,
    date: String
});

const Review = mongoose.model('review', ReviewSchema);

module.exports = Review;


