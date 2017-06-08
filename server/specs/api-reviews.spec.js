const server = require('../index');
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();

describe('-- GET => api/reviews Tests --', () => {
  it('it should response with status 200', (done) => {
    chai.request(server)
      .get('/api/reviews')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('it should return array ', (done) => {
    chai.request(server)
      .get('/api/reviews')
      .end((err, res) => {
        res.body.should.be.a('array');
        done();
      });
  });

  it('it should not be empty', (done) => {
    chai.request(server)
      .get('/api/reviews')
      .end((err, res) => {
        res.body.length.should.not.be.eql(0);
        done();
      });
  });

  it('it should have the right model schema', (done) => {
    chai.request(server)
      .get('/api/reviews')
      .end((err, res) => {
        res.body[0].should.have.keys('_id', 'id', '__v', 'rating', 'locationId', 'title', 'content', 'date');
        done();
      });
  });

});


