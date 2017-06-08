const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	ISBN: {
		type: String,
		validate: {
			validator: ISBN => ISBN.length > 0,
			message: 'ISBN must contain at least 1 character'
		},
		required: [true, 'ISBN is required']
	},
	title: {
		type: String,
		validate: {
			validator: title => title.length > 0,
			message: 'Title must contain at least 1 character'
		},
		required: [true, 'Title is required']
	},
	authors: [String],
	genres: [String],
	copies: [{
		type: Schema.Types.ObjectId,
		ref: 'copy'
	}],
	price: {
		type: Number,
		validate: {
			validator: price => price > 0,
			message: 'Price must be higher than 0'
		}
	}
});

const Book = mongoose.model('book', BookSchema);

module.exports = Book;
