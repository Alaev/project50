/* global it, describe */

const server = require('../../index');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
chai.should();

describe('books route test', () => {
  const route = '/api/books';

  it('should response with stats 200 when calling books route at root level', done => {
    chai.request(server).get(route).end((err, res) => {
      res.should.have.status('200');
      done();
    });
  });

  it('should response with stats 404 when calling routes that not exists', done => {
    chai.request(server).get('/api/book').end((err, res) => {
      res.should.have.status('404');
      done();
    });
  });

  it('should return an array of books ', done => {
    chai.request(server).get(route).end((err, res) => {
      res.body.should.be.a('array');
      res.body.length.should.not.be.eql(0);
      done();
    });
  });

  it('should have the right model schema', done => {
    chai.request(server).get(route).end((err, res) => {
      res.body[0].should.have.keys('ISBN', 'title', 'authors', 'genres', 'price', 'copies');
      res.body[0].should.not.have.keys('_id', '__v');
      done();
    });
  });
});

describe('CRUD book', () => {
  const route = '/api/books';
  const ISBN = '0';

  it('should not add a book without required fields', done => {
    const book = {
      authors: ['chai latte', 'choca mocha'],
      genres: ['hot', 'beverages'],
      price: 10
    };

    chai.request(server).post(route).send(book).end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('errors');
      res.body.errors.should.have.property('ISBN');
      res.body.errors.should.have.property('title');
      res.body.errors.ISBN.should.have.property('kind').eql('required');
      res.body.errors.title.should.have.property('kind').eql('required');
      done();
    });
  });

  it('should not add a book with price <= 0', done => {
    const book = {
      ISBN,
      title: 'test book',
      authors: ['chai latte', 'choca mocha'],
      genres: ['hot', 'beverages'],
      price: 0
    };

    chai.request(server).post(route).send(book).end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('errors');
      res.body.errors.should.have.property('price');
      res.body.errors.price.should.have.property('value').not.be.above(0);
      done();
    });
  });

  it('should add a book', done => {
    const book = {
      ISBN,
      title: 'test book',
      authors: ['chai latte', 'choca mocha'],
      genres: ['hot', 'beverages'],
      price: 10
    };

    chai.request(server).post(route).send(book).end((err, res) => {
      res.should.have.status(200);
      res.body.book.should.be.a('object');
      res.body.book.should.have.property('_id');
      res.body.book.should.have.property('ISBN');
      res.body.book.should.have.property('title');
      res.body.book.should.have.property('authors');
      res.body.book.should.have.property('genres');
      res.body.book.should.have.property('price');
      res.body.book.authors.should.be.a('array');
      res.body.book.genres.should.be.a('array');
      res.body.book.price.should.be.a('number');
      res.body.book.ISBN.should.equal(ISBN);
      done();
    });
  });

  it('should return book by ISBN', done => {
    chai.request(server).get(`${route}/${ISBN}`).end((err, res) => {
      res.should.have.status('200');
      res.body.should.be.a('object');
      res.body.should.have.property('title');
      res.body.should.have.property('authors');
      res.body.should.have.property('genres');
      res.body.should.have.property('price');
      res.body.should.have.property('copies');
      res.body.ISBN.should.equal(ISBN);
      done();
    });
  });

  it('should replace a book', done => {
    const book = {
      ISBN,
      title: 'updated test book',
      authors: ['chai latte', 'choca mocha'],
      genres: ['hot', 'beverages'],
      price: 10
    };

    chai.request(server).put(`${route}/${ISBN}`).send(book).end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('message').eql('Great news, book was replaced');
      res.body.should.have.property('replaced');
      res.body.replaced.ISBN.should.equal(ISBN);
      res.body.replaced.title.should.equal('updated test book');
      done();
    });
  });

  it('should remove a book', done => {
    chai.request(server).delete(`${route}/${ISBN}`).end((err, res) => {
      res.should.have.status(200);
      res.body.should.be.a('object');
      res.body.should.have.property('message').eql('Book was deleted!');
      res.body.should.have.property('removed');
      res.body.removed.should.have.property('ISBN').eql(ISBN);
      done();
    });
  });
});
