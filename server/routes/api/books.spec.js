const server = require('../../index');
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();
const assert = chai.assert;

describe('books route test', () => {
  const route = '/api/books';
  it('should response with stats 200 when calling books route at root level', (done) => {
    chai.request(server)
      .get(route)
      .end((err, res) => {
        res.should.have.status('200');
        done();
      });
  });

  it('should response with stats 404 when calling routes that not exists', (done) => {
    chai.request(server)
      .get('/api/book')
      .end((err, res) => {
        res.should.have.status('404');
        done();
      });
  });

  it('should not be empty', (done) => {
    chai.request(server)
      .get(route)
      .end((err, res) => {
        res.body.length.should.not.be.eql(0);
        done();
      });
  });

  it('should return an array ', (done) => {
    chai.request(server)
      .get(route)
      .end((err, res) => {
        res.body.should.be.a('array');
        done();
      });
  });

  it('should not return book id ', (done) => {
    chai.request(server)
      .get(route)
      .end((err, res) => {
        res.body[0].should.not.have.keys('_id');
        done();
      });
  });

  it('should have the right model schema', (done) => {
    chai.request(server)
      .get(route)
      .end((err, res) => {
        res.body[0].should.have.keys('ISBN', 'title', 'authors', 'genres', 'price', '__v');
        done();
      });
  });

  it('should return book by ISBN', (done) => {
    const ISBN = '1';
    chai.request(server)
      .get(`${route}/${ISBN}`)
      .end((err, res) => {
        res.should.have.status('200');
        res.body.should.be.a('object');
        assert.equal(res.body.ISBN, ISBN, `ISBN equal ${ISBN}`);
        done();
      });
  });

});


