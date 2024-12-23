const express = require('express');
const app = express();
const routes = require('./routes');
require('dotenv').config();
const mongoose = require('mongoose');


// Middleware pour parser les JSON
app.use(express.json());

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connexion à MongoDB réussie');
}).catch((err) => {
    console.error('Erreur de connexion à MongoDB:', err);
});

// Routes
app.use('/api', routes);
app.use("/users", routes);  // Pour accéder aux routes des utilisateurs


module.exports = app;
