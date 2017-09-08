<<<<<<< HEAD
// const express = require('express');
// // const router = require('express-promise-router')();

// // router.get('/', (req, res, next) => {
// //   res.status(200).sendFile('index.html');
// // });

// module.exports = router;
=======
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).sendFile('index.html');
});

module.exports = router;
>>>>>>> 32bb0be... init commit
