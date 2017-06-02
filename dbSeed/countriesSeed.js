//db.getCollection('books').insert(array)
const Country = require('../server/models/countries');

require('../server/helpers/dbConnect').connect();



const countries = [
    {
        'id': 1,
        'name': 'Israel'
    },
    {
        'id': 2,
        'name': 'China'
    },
    {
        'id': 3,
        'name': 'Russia'
    },
    {
        'id': 4,
        'name': 'Brazil'
    }
];

function seed(array) {
    array.forEach(function(element) {

        const newElement = new Country(element);
        newElement.save()
            .then(res => {
                console.log('country added');
            })
            .catch(err => {
                next(err);
            });

    });
}
seed(countries);

setTimeout(function() {

    process.exit(0);

}, 1000);
