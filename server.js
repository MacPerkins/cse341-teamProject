/* eslint-disable no-undef */
const express = require('express');
const app = express();
const session = require('express-session');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8000;

// establish a connection to the mongo database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database', err);
    process.exit(1);
});

app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true
    })
  )
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Controll-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Z-Key, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, OPTIONS, DELETE');
    next();
  })
  .use(cors({ methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'] }))
  .use(cors({ origin: '*' }))
  .use('/', require('./routes/index.js'));


process.on('uncaughtException', (err, origin) => {
  console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin ${origin}`);
});

app.listen(port, () => {
    console.log(`Database is listening and node Running on port ${port}`);
});