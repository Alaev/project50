const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CopySchema = new Schema({
		id: {
			type: String,
			required: true
		},
		book: {
			type: Schema.Types.ObjectId,
			ref: 'book'
		},
		status: {
			type: String,
			enum: ['available', 'borrowed', 'late', 'maintenance', 'lost']
		},
		// status: {
		// 	type: String,
		// 	validate: {
		// 		validator: status => ['available', 'borrowed', 'late', 'lost', 'maintenance'].find(stat === status),
		// 		message: 'Invalid status for a copy'
		// 	}
		// },
		borrowedDate: String,
		lastBorrower: {
			type: Schema.Types.ObjectId,
			ref: 'borrower'
		},
	}
);

const Copy = mongoose.model('copy', CopySchema);

module.exports = Copy;
