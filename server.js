const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const entriesRouter = require('./lib/routers/entries-router');
const cors = require('cors');

app.use(cors({origin: '*'}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/v1/entries/', entriesRouter);

app.get('/', (request, response) => {
  response.send('Hello World!');
});

if (!module.parent) { // NEW!
  let port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log('The API is live! (http://localhost:3000)');
  });
}

module.exports = app;
