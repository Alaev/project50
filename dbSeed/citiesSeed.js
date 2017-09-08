//db.getCollection('books').insert(array)
const City = require('../server/models/cities');

require('../server/helpers/dbConnect').connect();



const cities = [
    {
        'id': 1,
        'countryId': 1,
        'name': 'Rio De Janeiro'
    },
    {
        'id': 2,
        'countryId': 1,
        'name': 'Maraca'
    },
    {
        'id': 3,
        'countryId': 3,
        'name': 'Moscow'
    },
    {
        'id': 4,
        'countryId': 3,
        'name': 'San Petersburg'
    },
    {
        'id': 5,
        'countryId': 2,
        'name': 'Xaho'
    },
    {
        'id': 6,
        'countryId': 2,
        'name': 'Xiono'
    },
    {
        'id': 7,
        'countryId': 6,
        'name': 'Jerusalem'
    },
    {
        'id': 8,
        'countryId': 6,
        'name': 'Tel Aviv'
    },
    {
        'id': 9,
        'countryId': 6,
        'name': 'Holon'
    },
    {
        'id': 10,
        'countryId': 6,
        'name': 'Herzelia'
    }
];

function seed(array) {
    array.forEach(function(element) {

        const newElement = new City(element);
        newElement.save()
            .then(res => {
                console.log('city added');
            })
            .catch(err => {
                next(err);
            });

    });
}
seed(cities);


setTimeout(function() {

    process.exit(0);

}, 1000);
