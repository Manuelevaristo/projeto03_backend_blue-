const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/personagem-databade', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDb CONNECT!');
    })
    .catch((error) => {
      return console.log(`Erro ao conectar com o MongoDb, erro: ${error} `);
    });
};


module.exports = connectToDatabase;
