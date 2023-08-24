const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'postgres', // Nome do banco de dados
    'postgres', // Nome de usuário
    'TzDujLtwyy6dCdrPAgvp', // Senha
    {
        dialect: 'postgres', // Dialet do banco de dados
        host: 'containers-us-west-163.railway.app', // Host do banco de dados
        port: 7249, // Porta do banco de dados
        logging: false
    }
);

module.exports = sequelize;
