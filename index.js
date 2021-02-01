const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const postsRoute = require('./routes/posts');

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/rest-api-1';
const PORT = process.env.PORT || 3000;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Database connected');
    // Start listening to the server
    app.listen(PORT);
  });

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/posts', postsRoute);
