const personagensService = require('../services/personagem.service');
const mongoose = require('mongoose');

const findAllPersonagensController = async (req, res) => {
  const personagens = await personagensService.findAllPersonagensService();
  if (personagens.length == 0) {
    return res.status(404).send({ message: 'Lista de personagens vazia' });
  }
  res.send(personagens);
};
const findByIdPersonagemController = async (req, res) => {
  const parametroId = req.params.id;
  const choosePersonagem = await personagensService.findByIdPersonagemService(
    parametroId,
  );
  if (!choosePersonagem) {
    return res.status(404).send({ message: 'Personagem não encontrada' });
  }
  res.send(choosePersonagem);
};

const createPersonagemController = async (req, res) => {
  const personagem = req.body;

  const newPersonagem = await personagensService.createPersonagemService(
    personagem,
  );
  res.status(201).send(newPersonagem);
};

const updatePersonagemController = async (req, res) => {
  const parametroId = req.params.id;
  const personagemEdit = req.body;
  const updatedPersonagem = await personagensService.updatePersonagemService(
    parametroId,
    personagemEdit,
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = async (req, res) => {
  const parametroId = req.params.id;

  await personagensService.deletePersonagemService(parametroId);
  res.send({ message: 'Personagem deletada com sucesso!' });
};

module.exports = {
  findAllPersonagensController,
  findByIdPersonagemController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController,
};
