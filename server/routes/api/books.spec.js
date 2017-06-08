const server = require('../../index');
const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
chai.should();

describe('books route test', () => {
  it('should response with stats 200 when calling books route at root level', (done) => {
    chai.request(server)
      .get('/api/books/')
      .end((err, res) => {
        res.should.have.status('200');
        done();
      });
  });

  it('should response with stats 404 when calling routes that not exists', (done) => {
    chai.request(server)
      .get('/api/book/')
      .end((err, res) => {
        res.should.have.status('404');
        done();
      });
  });

  // it('it should not be empty', (done) => {
  //   chai.request(server)
  //     .get('/api/cities')
  //     .end((err, res) => {
  //       res.body.length.should.not.be.eql(0);
  //       done();
  //     });
  // });

  // it('it should have the right model schema', (done) => {
  //   chai.request(server)
  //     .get('/api/cities')
  //     .end((err, res) => {
  //       res.body[0].should.have.keys(
  //         '_id',
  //         'id',
  //         '__v',
  //         'name',
  //         'countryId'
  //       );
  //       done();
  //     });
  // });

});


