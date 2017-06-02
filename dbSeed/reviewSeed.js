//db.getCollection('books').insert(array)
const Review = require('../server/models/reviews');

require('../server/helpers/dbConnect').connect();


const reviews = [
    {
        'id': 1,
        'locationId': 1,
        'title': 'dictumst etiam faucibus cursus urna ut tellus nulla ut erat',
        'content': 'quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
        'rating': 5,
        'date': '16/09/2016'
    },
    {
        'id': 2,
        'locationId': 2,
        'title': 'proin eu mi nulla ac enim in tempor',
        'content': 'lectus suspendisse potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat',
        'rating': 4,
        'date': '12/09/2016'
    },
    {
        'id': 3,
        'locationId': 2,
        'title': 'sapien cum sociis natoque penatibus et magnis dis parturient montes',
        'content': 'ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum',
        'rating': 5,
        'date': '30/06/2016'
    },
    {
        'id': 4,
        'locationId': 4,
        'title': 'aenean fermentum donec ut mauris',
        'content': 'velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor',
        'rating': 2,
        'date': '08/04/2017'
    },
    {
        'id': 5,
        'locationId': 5,
        'title': 'nulla dapibus dolor vel est donec odio justo',
        'content': 'penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate',
        'rating': 3,
        'date': '23/11/2016'
    },
    {
        'id': 6,
        'locationId': 6,
        'title': 'a feugiat et eros vestibulum ac est lacinia nisi',
        'content': 'aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio',
        'rating': 4,
        'date': '06/06/2016'
    },
    {
        'id': 7,
        'locationId': 7,
        'title': 'ultrices phasellus id sapien in',
        'content': 'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus',
        'rating': 5,
        'date': '16/12/2016'
    },
    {
        'id': 8,
        'locationId': 8,
        'title': 'est congue elementum in hac habitasse platea',
        'content': 'odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in',
        'rating': 1,
        'date': '19/03/2017'
    },
    {
        'id': 9,
        'locationId': 9,
        'title': 'vel pede morbi porttitor lorem id',
        'content': 'posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis',
        'rating': 5,
        'date': '27/04/2017'
    },
    {
        'id': 10,
        'locationId': 10,
        'title': 'dui nec nisi volutpat eleifend donec',
        'content': 'viverra diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu',
        'rating': 1,
        'date': '13/12/2016'
    }
];



function seed(array) {
    array.forEach(function(element) {

        const newElement = new Review(element);
        newElement.save()
            .then(res => {
                console.log('review added');
            })
            .catch(err => {
                next(err);
            });

    });
}
seed(reviews);

setTimeout(function() {

    process.exit(0);

}, 1000);
