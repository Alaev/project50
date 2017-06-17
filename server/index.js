/* eslint no-console: "off"*/
const express = require('express');
const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

// const Librarian = require('./models/Librarians');
// connect to db
require('./helpers/dbConnect').connect();

const app = express();

// routers
// const index = require('./routes/');
const api = require('./routes/api/');

// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, '../client/dist')));

// defines CORES
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next();
});


// app.post('/register', (req, res) => {
//   const librarian = req.body; 
//   const newLibrarian = new Librarian({
//     ID: librarian.ID,
//     name: librarian.name,
//     phone: librarian.phone,
//     email: librarian.email,
//     password: librarian.password

//   });

//   newLibrarian.save((err) => {
//     console.log(newLibrarian);
//     res.status(200).json(newLibrarian);
//     if (err) {
//       console.log(err);
//     }
//   });
// });

// routers
// app.use('/', index);
app.use('/api', api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Page not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res) => {
  const dev = app.get('env');
  const status = err.status || 500;
  if (dev === 'test') {
    res.status('404').json({});
  }
  if (dev === 'development') {
    res.status(status).json({
      error: {
        message: err.message
      }
    });
    console.log(err);
  } else {
    res.status(status).json({
      error: 500
    });
    console.log(err);
  }
});

module.exports = app;
