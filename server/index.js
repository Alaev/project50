<<<<<<< HEAD
/* eslint no-console: "off"*/
const express = require('express');
const logger = require('morgan');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
// const index = require('./routes/');
const api = require('./routes/api/');

// connect to db
require('./helpers/dbConnect').connect();

const app = express();

// middlewares
if(!process.env.NODE_ENV === 'test'){
  app.use(logger('dev'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, '../client/dist')));


// added  npm cors module
app.use(cors());

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
=======
const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

// connect to db
require('./helpers/dbConnect').connect();
const app = express();

// routers
const index = require('./routes/');
const api = require('./routes/api/');

// middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist')));

// routers
app.use('/', index);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    // set locals, only providing error in development
    res.status(status).json({
        error: {
            message: error.message
        }
    });
    // response to me
    console.log(err);
});


module.exports = app;

>>>>>>> 32bb0be... init commit
