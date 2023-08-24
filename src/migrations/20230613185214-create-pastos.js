'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Pasto', {
            id_pasto: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome_pasto: Sequelize.STRING,
            capacidade: Sequelize.INTEGER,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Pasto');
    }
};
