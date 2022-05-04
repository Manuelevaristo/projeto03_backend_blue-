const route = require('express').Router();
const controllerPersonagens = require('../controllers/personagem.controller');

route.get(
  '/all-personagens',
  controllerPersonagens.findAllPersonagensController,
);
route.get(
  '/personagem/:id',
  controllerPersonagens.findByIdPersonagemController,
);
route.post('/create', controllerPersonagens.createPersonagemController);
route.put('/update/:id', controllerPersonagens.updatePersonagemController);
route.delete('/delete/:id', controllerPersonagens.deletePersonagemController);

module.exports = route;
