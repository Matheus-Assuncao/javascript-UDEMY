const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

//Rotas da home page
route.get('/', homeController.paginaInicial);
route.post('/',homeController.trataPost);

//Rotas para contato
route.get('/contato',contatoController.paginaInicial);

module.exports = route;