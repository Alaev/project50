const express = require('express');
const router = require('express-promise-router')();

router.get('/:librarian', function(req, res) {
	const librarian = req.params.librarian;

	db.getLibrarianByID(librarian, function(err, data) {
		if(err) {
			res.json({ error: 'we have problem to get all books' });
		}
		else {
			res.json(data);
		}
	});
});

router.delete('/:librarian', function(req, res) {
	const librarian = req.params.librarian;

	db.deleteLibrarianByID(librarian, function(err, data) {
		if(err) {
			res.json({ error: 'we have problem to get all books' });
		}
		else {
			res.json(data);
		}
	});
});

router.put('/:librarian', function(req, res) {
	const librarian = req.params.librarian;
	let librarianData = {};

	for(let key in req.body) {
		librarianData[key] = req.body[key];
	}

	db.updateLibrarianByID(librarian, librarianData, function(err, data) {
		res.json(data);
	});

});

module.exports = router;



