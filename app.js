const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const booksRoutes = require('./routes/books');

mongoose.connect('mongodb+srv://player01:0107@cluster1.zpbiikn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch((err) => console.log('Connexion à MongoDB échouée :', err));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

app.use('/api/book', booksRoutes);

module.exports = app;