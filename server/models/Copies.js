const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CopySchema = new Schema({
		ID: {
			type: String,
			required: true
		},
		book: {
			type: Schema.Types.ObjectId,
			ref: 'book',
			required: true
		},
		status: {
			type: String,
			enum: ['available', 'borrowed', 'late', 'maintenance', 'lost'],
			required: true,
			default: 'available'
		},
		// status: {
		// 	type: String,
		// 	validate: {
		// 		validator: status => ['available', 'borrowed', 'late', 'lost', 'maintenance'].find(stat === status),
		// 		message: 'Invalid status for a copy'
		// 	}
		// },
		borrowedDate: {
			type: Date,
			default: null
		},
		lastBorrower: {
			type: Schema.Types.ObjectId,
			ref: 'borrower',
			default: null
		},
	}
);

const Copy = mongoose.model('copy', CopySchema);
Copy.collection.createIndex({ ID: 1 });

module.exports = Copy;
