const EntriesRouter = require('express').Router();
const Entry = require('../models/entry');

EntriesRouter.get('/', (request, response) => {
  Entry.all()
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      response.status(500).send({ error: error.message });
    });
});

EntriesRouter.get('/:id', (request, response) => {
  Entry.find(request.params.id)
    .then((data) => {
      if(data) {
        response.send(data);
      } else {
        response.status(404).send({error: "resource not found"})
      }
    })
    .catch((error) => {
      response.status(500).send({ error: error.message });
    });
});

EntriesRouter.post('/', (request, response) => {
  Entry.create(request.body)
    .then( data => {
      response.sendStatus(201);
    })
    .catch( error => {
      response.status(500).send({ error: err.message });
    });
});

module.exports = EntriesRouter;
