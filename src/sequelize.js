const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'teste', // Nome do banco de dados
    'postgres', // Nome de usuário
    'gWKbaPzMMalfTpvg7KxG', // Senha
    {
        dialect: 'postgres', // Dialet do banco de dados
        host: 'containers-us-west-66.railway.app', // Host do banco de dados
        port: 6970, // Porta do banco de dados
        logging: false
    }
);

module.exports = sequelize;
