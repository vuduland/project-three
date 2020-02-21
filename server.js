const express = require('express');
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
    // console.error();
    console.log(err.message);
  } else {
    const collection = client.db('kc-cleanup').collection('Users');
    console.log(`referencing ${collection} in the db. connected. hi.`);
  }
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/public/index.html'));
  if (res) {
    console.log('CONNECTED TO NETWORK MAYBE');
  }
  // res.json({ msg: 'Welcome to the KC-Cleanup API...' });
});

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/pins'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
