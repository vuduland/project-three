const express = require('express');
require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 8080;
const MongoClient = require('mongodb').MongoClient;
const app = express();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
client.connect(err => {
  if (err) {
    console.log(err);
  } else {
    const collection = client.db('kc-cleanup').collection('Users');
//     collection.insertOne({	
//       item: 'canvas',	
//       qty: 100,	
//       tags: ['cotton'],	
//       size: { h: 28, w: 35.5, uom: 'cm' }	
//     });
    console.log(`referencing ${collection} in the database. connected. hi.`);
  }
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Send every request to the React app
// Define any API routes before this runs
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
  if (res) {
    console.log('CONNECTED TO NETWORK MAYBE');
  }
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
