const Personagem = require('../models/Personagem');

const findAllPersonagensService = async () => {
  const personagens = await Personagem.find();
  return personagens;
};

const findByIdPersonagemService = async (parametroId) => {
  const personagem = await Personagem.findById(parametroId);
  return personagem;
};

const createPersonagemService = async (newPersonagem) => {
  
  const personagemCreated = await Personagem.create(newPersonagem);
  return personagemCreated;
};
const updatePersonagemService = async (id, personagemEdited) => {
  const personagemUpdate = await Personagem.findByIdAndUpdate(
    id,
    personagemEdited,
  );

  return personagemUpdate;
};

const deletePersonagemService = async (id) => {
  return await Personagem.findByIdAndDelete(id);
};

module.exports = {
  findAllPersonagensService,
  findByIdPersonagemService,
  createPersonagemService,
  updatePersonagemService,
  deletePersonagemService,
};
