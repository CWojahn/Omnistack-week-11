const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController');
const incidentsController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);

routes.delete('/incidents/:id', incidentsController.delete);

routes.get('/profile', profileController.index);


module.exports = routes;