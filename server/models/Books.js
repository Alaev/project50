const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	ISBN: {
		type: String,
		validate: {
			validator: ISBN => ISBN.length > 0,
			message: 'ISBN must contain at least 1 character'
		}
	},
	title: {
		type: String,
		validate: {
			validator: title => title.length > 0,
			message: 'Title must contain at least 1 character'
		}
	},
	authors: [String],
	genres: [String],
	copies: [{
		type: Schema.Types.ObjectId,
		ref: 'copies'
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
