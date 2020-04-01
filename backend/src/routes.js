const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const validate = require('./validation/validate')

const  routes = express.Router();

routes.post('/sessions', validate.validSession, SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', validate.validOngs, OngController.create);

routes.get('/profile', validate.validProfile, ProfileController.index);

routes.get('/incidents', validate.validPagenation, IncidentController.index);
routes.post('/incidents', validate.validIncident, IncidentController.create);
routes.delete('/incidents/:id', validate.validIncidentDelete, IncidentController.delete);

module.exports = routes;
