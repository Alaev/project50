//db.getCollection('books').insert(array)
const Location = require('../server/models/locations');

require('../server/helpers/dbConnect').connect();



const locations = [
    {
        'id': 1,
        'hero': 'Simple rock and roll about your stuff',
        'name': 'Rockefeller',
        'description': 'dictumst etiam faucibus cursus urna ut tellus nulla ut',
        'maxGuests': 5,
        'countryId': 1,
        'cityId': 1,
        'lat': 87.207,
        'long': 7.582,
        'imageUrl': 'https://source.unsplash.com/category/buildings/?montreal',
        'price': 847.18
    },
    {
        'id': 2,
        'name': 'Hanover',
        'description': 'dictumst etiam faucibus cursus urna ut tellus nulla ut',
        'maxGuests': 3,
        'countryId': 1,
        'cityId': 1,
        'lat': 38.233,
        'long': 88.623,
        'imageUrl': 'https://source.unsplash.com/category/buildings/?Israel',
        'price': 449.26
    },
    {
        'id': 3,
        'name': 'Linden',
        'description': 'dictumst etiam faucibus cursus urna ut tellus nulla ut ',
        'maxGuests': 2,
        'countryId': 2,
        'cityId': 2,
        'lat': 47.451,
        'long': 98.98,
        'imageUrl': 'https://source.unsplash.com/category/buildings/?Russia',
        'price': 796.07
    },
    {
        'id': 4,
        'name': 'Drewry',
        'description': 'dictumst etiam faucibus cursus urna ut tellus nulla ut ',
        'maxGuests': 4,
        'countryId': 2,
        'cityId': 2,
        'lat': 82.19,
        'long': 74.406,
        'imageUrl': 'https://source.unsplash.com/category/buildings/?Brazil',
        'price': 753.41
    },
    {
        'id': 5,
        'name': 'Springs',
        'description': 'dictumst etiam faucibus cursus urna ut tellus nulla ut ',
        'maxGuests': 1,
        'countryId': 3,
        'cityId': 3,
        'lat': 55.033,
        'long': 11.572,
        'imageUrl': 'https://source.unsplash.com/category/buildings/?Portugal',
        'price': 353.71
    },
    {
        'id': 6,
        'name': 'Warrior',
        'description': 'dictumst etiam faucibus cursus urna ut tellus nulla ut ',
        'maxGuests': 3,
        'countryId': 3,
        'cityId': 3,
        'lat': 70.977,
        'long': 82.983,
        'imageUrl': 'https://source.unsplash.com/category/buildings/?Tokyo',
        'price': 361.76
    },
    {
        'id': 7,
        'name': 'Debra',
        'description': 'sapien cum sociis natoque et magnis dis parturient montes',
        'maxGuests': 2,
        'countryId': 4,
        'cityId': 4,
        'lat': 20.286,
        'long': 28.041,
        'imageUrl': 'https://source.unsplash.com/category/buildings/?Spain',
        'price': 699.13
    },
    {
        'id': 8,
        'name': 'Longview',
        'description': 'aenean fermentum donec ut mauris',
        'maxGuests': 3,
        'countryId': 4,
        'cityId': 4,
        'lat': 88.643,
        'long': 83.074,
        'imageUrl': 'https://source.unsplash.com/category/buildings/?Germany',
        'price': 922.59
    },
    {
        'id': 9,
        'name': 'Blaine',
        'description': 'sapien cum sociis penatibus et magnis parturient montes',
        'maxGuests': 1,
        'countryId': 4,
        'cityId': 4,
        'lat': 99.532,
        'long': 7.488,
        'imageUrl': 'https://source.unsplash.com/random/250x250',
        'price': 876.20
    },
    {
        'id': 10,
        'name': 'Pine View',
        'description': 'proin eu mi nulla ac enim in tempor',
        'maxGuests': 3,
        'countryId': 4,
        'cityId': 4,
        'lat': 99.314,
        'long': 93.781,
        'imageUrl': 'https://source.unsplash.com/user/erondu/daily',
        'price': 955.18
    }
];


function seed(array) {
    array.forEach(function(element) {

        const newElement = new Location(element);
        newElement.save()
            .then(res => {
                console.log('location added');
            })
            .catch(err => {
                next(err);
            });

    });
}
seed(locations);
setTimeout(function() {

    process.exit(0);

}, 1000);
