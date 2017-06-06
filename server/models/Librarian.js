var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

var librarianSchema = new Schema({
    name: {
        first: String,
        last: String
    },
    phone: Number,
    local: {
        email: String,
        password: String
    }

});

librarianSchema.methods = {
    encryptPassword: function(plainTextPassWord) {
        if(!plainTextPassWord) {
            return '';
        }
        var salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(plainTextPassWord, salt);
    },

    authenticate: function(plainTextPassWord) {
        return bcrypt.compareSync(plainTextPassWord, this.local.password);
    }
};

module.exports = mongoose.model('librarian', librarianSchema);
