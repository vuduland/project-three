const express = require('express');

const app = express();

app.get('/', (req, res) =>
  res.json({ msg: 'Welcome to the KC-Cleanup API...' })
);

//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/pins'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
