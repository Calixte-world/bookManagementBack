
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const bookControllerMongo = require('./controllers/bookControllerMongo');
const userController = require('./controllers/userController');
const jwtVerify = require('./middlewares/jwtVerify');



require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_CONNECT)
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !', err));

const app = express();


// Configuration de bodyParser pour analyser les données JSON et les données de formulaire
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Route GET pour la page d'accueil
app.get('/', (req, res) => {
  // Affichage des en-têtes de requête pour le débogage (à retirer en production)
  //console.log("Headers:", req.headers);
  res.send('<h1>Bienvenue sur notre page d\'accueil!</h1>');
});

// Route POST pour ajouter des données
app.post('/books', bookControllerMongo.postBooks);
app.get('/books', bookControllerMongo.getBooks);

app.get ('/books/:id', bookControllerMongo.getBooks);

app.delete('/books/:id', bookControllerMongo.deleteBook);
app.put('/books/:id', bookControllerMongo.updateBook);

app.post('/login', userController.login);

// Démarrage du serveur
app.listen(3003, () => {
  console.log('Serveur démarré sur le port 3003');
});


