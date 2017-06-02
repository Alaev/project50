const mongoose = require('mongoose');

// mongodb url config
const protocol = 'mongodb';
const url = 'localhost';
const port = 27017;
const db = 'airbnb';

// mongoose connect function
function connect() {
    mongoose.Promise = global.Promise;
    mongoose.connect(protocol + '://' + url + ':' + port + '/' + db);
    return mongoose.connection;
}

module.exports = {
    connect
};
