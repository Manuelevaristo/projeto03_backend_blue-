const mongoose = require('mongoose');

const PersonagemSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  personagem: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  imagem: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  nacionalidade: {
    type: String,
    required: true,
  },
  carreira: {
    type: Number,
    required: true,
  },
});

const Personagem = mongoose.model('personagens', PersonagemSchema);

module.exports = Personagem;
