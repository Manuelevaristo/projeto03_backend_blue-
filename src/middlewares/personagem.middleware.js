const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const parametroId = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(parametroId)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
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
      .send({ message: 'Envie o todos os campos da personagem!' });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
