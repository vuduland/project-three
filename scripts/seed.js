const mongoose = require('mongoose');
const db = require('../models');
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/reactreadinglist'
);

const userSeed = [
  {
    username: 'deadZone',
    password: '1234567',
    email: 'deadZone@one.com',
    userCreated: Date.now()
  },
  {
    username: 'deadYone',
    password: '1234567',
    email: 'deadYone@one.com',
    userCreated: Date.now()
  },
  {
    username: 'deadXone',
    password: '1234567',
    email: 'deadXone@one.com',
    userCreated: Date.now()
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
