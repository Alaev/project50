// const express = require('express');
// const router = require('express-promise-router')();
// const borrowerController = require('../../controllers/borrowers');

// router.route('/')
//   .get(borrowerController.index)
//   .post(borrowerController.newBorrower);

// router.route('/:borrowerID')
//   .get(borrowerController.getBorrower)
//   .put(borrowerController.replaceBorrower)
//   .delete(borrowerController.deleteBorrower);

// router.get('/', function(req, res) {
//   db.getAllBorrower(function(err, data) {
//     if(err) {
//       res.json({ error: 'we have problem to get all borrower' });
//     }
//     else {
//       res.json(data);
//     }
//   });
// });

// router.post('/', function(req, res) {
//   const newBorrower = {
//     ID: req.body.ID,
//     name: { first: req.body.name.first, last: req.body.name.last },
//     email: req.body.email,
//     phone: req.body.phone,
//     address: req.body.address,
//     borrowedBooks: req.body.borrowedBooks
//   };

//   db.addNewBorrower(newBorrower, function(err, data) {
//     if(err) {
//       res.json({ error: 'we have problem to add the new borrower' });
//     }
//     else {
//       res.json({ message: 'Borrower was created successfully' });
//     }
//   });
// });

// router.put('/updateBorrowerCopy/:id', function(req, res) {
//   const id = req.params.id;
//   const data = req.body;

//   db.updateBorrowerBooks(id, data, function(err, data) {
//     if(err) {
//       res.json({ message: 'We had problem to update borrower' });
//     } else {
//       res.json({ message: 'Borrower books array were updated OK were updated successfully' });
//     }
//   });

// });

// router.get('/:select/:input', function(req, res) {
//   const input = req.params.input;
//   const select = req.params.select;

//   db.getBorrowerBy(select, input, function(err, data) {
//     if(err) {
//       res.json({ error: 'we have problem to get all books' });
//     }
//     else {
//       res.json(data);
//     }
//   });
// });

// router.delete('/:borrower', function(req, res) {
//   const borrower = req.params.borrower;

//   db.deleteBorrowerByID(borrower, function(err, data) {
//     if(err) {
//       res.json({ error: 'we have problem to get all books' });
//     } else {
//       res.json('/borrower');
//     }
//   });
// });

// router.put('/:borrowerID', function(req, res) {
//   const borrower = req.params.borrowerID;
//   let borrowerData = {};
//   for(let key in req.body) {
//     borrowerData[key] = req.body[key];
//   }

//   db.updateBorrowerByID(borrower, borrowerData, function(err, data) {
//     if(err) {
//       res.json({ message: 'We had problem to update borrower' });
//     } else {
//       res.json({ message: 'Borrower were updated successfully' });
//     }
//   });

// });

// module.exports = router;



