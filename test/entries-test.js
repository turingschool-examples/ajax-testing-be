const assert = require('assert');
const request = require('request');
const app = require('../server');
const Entry = require('../lib/models/entry');

describe('Entries API', () => {

  before((done) => {
    this.port = 9876;
    this.server = app.listen(this.port, (err, result) => {
      if (err) { return done(err); }
      done();
    });
    this.request = request.defaults({
      baseUrl: 'http://localhost:9876/'
    });
  });

  after(() => {
    this.server.close();
  });

  context('GET /api/v1/:id', () => {

    beforeEach((done) => {
      Entry.create(
        {
          author: "nate@turing.io",
          body: "This is a post about making cupcakes. The internet loves cupcakes."
        }
      )
        .then(() => done())
        .catch(done);
    });

    afterEach((done) => {
      Entry.destroyAll()
        .then(() => done())
        .catch(done);
    });

    it('should return a 404 if the resource is not found', (done) => {
      this.request.get('/api/v1/entries/10000', (error, response) => {
        if (error) { done(error) }
        assert.equal(response.statusCode, 404)
        done()
      })
    })

    it('should have the author and body from the entry', (done) => {
      Entry.find(1).then( (entry) => {
        this.request.get(`/api/v1/entries/1`, (error, response) => {
  		    if (error) { done(error); }

          let responseEntry = JSON.parse(response.body);

  		    assert.equal(entry.author, responseEntry.author, `"${response.body}" does not include "${entry.author}".`);
  		    assert.equal(entry.body, responseEntry.body, `"${response.body}" does not include "${entry.body}".`);
  		    done();
  		  });
      });
		});

  });

});
