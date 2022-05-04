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

  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'id inválido' });
  }
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
  if (
    !personagem ||
    !personagem.nome ||
    !personagem.personagem ||
    !personagem.descricao ||
    !personagem.imagem ||
    !personagem.idade ||
    !personagem.nacionalidade ||
    !personagem.carreira
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do personagem' });
  }
  const newPersonagem = await personagensService.createPersonagemService(
    personagem,
  );
  res.status(201).send(newPersonagem);
};

const updatePersonagemController = async (req, res) => {
  const parametroId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'id inválido' });
  }
  const personagemEdit = req.body;

  if (
    !personagemEdit ||
    !personagemEdit.nome ||
    !personagemEdit.personagem ||
    !personagemEdit.descricao ||
    !personagemEdit.imagem ||
    !personagemEdit.idade ||
    !personagemEdit.nacionalidade ||
    !personagemEdit.carreira
  ) {
    return res
      .status(400)
      .send({ message: 'Envie todos os campos do personagem' });
  }
  const updatedPersonagem = await personagensService.updatePersonagemService(
    parametroId,
    personagemEdit,
  );
  res.send(updatedPersonagem);
};

const deletePersonagemController = async (req, res) => {
  const parametroId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'id inválido' });
  }
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
