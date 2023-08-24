const sequelize = require('../sequelize'); // Importe a instância do sequelize
const AnimalModel = require('./animais');
const UserModel = require('./user');
const PastoModel = require('./pastos');
const EntradaModel = require('./entrada');
const MovimentacaoModel = require('./movimentacao');


(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');

        // Define associações entre modelos aqui
        EntradaModel.associate({ AnimalModel, PastoModel });
        MovimentacaoModel.associate({ PastoModel, AnimalModel });

        // Sincronize os modelos com o banco de dados (crie as tabelas)
        await sequelize.sync({ alter: true });
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
