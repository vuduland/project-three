const express = require('express');
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;
const app = express();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect(err => {
  const collection = client.db('heroku_ztzn9n3k').collection('test');

  console.log(
    'referencing ' + collection.foo + ' in the database. connected. hi.'
  );
  // perform actions on the collection object
  client.close();
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
