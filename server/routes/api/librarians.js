var express = require('express');
var router = require('express-promise-router')();
var authConfig = require('../../config/auth-config');

router.get('/:librarian', function (req, res) {
	var librarian = req.params.librarian;

	db.getLibrarianByID(librarian, function (err, data) {
		if (err) {
			res.json({ error: 'we have problem to get all books' });
		}
		else {
			res.json(data);
		}
	});
});

router.delete('/:librarian', function (req, res) {
	var librarian = req.params.librarian;

	db.deleteLibrarianByID(librarian, function (err, data) {
		if (err) {
			res.json({ error: 'we have problem to get all books' });
		}
		else {
			res.json(data);
		}
	});
});

router.put('/:librarian', function (req, res) {
	var librarian = req.params.librarian;
	var bookData = {};
	for (var key in req.body) {

		bookData[key] = req.body[key];
	}

	db.updateLibrarianByID(librarian, bookData, function (err, data) {
		res.json(data);
	});

});

module.exports = router;



