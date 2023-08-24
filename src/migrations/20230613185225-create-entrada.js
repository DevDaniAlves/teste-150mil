'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Entradas', {
            id_entrada: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_animal: {
                type: Sequelize.INTEGER,
            },
            id_pasto_entrada: {
                type: Sequelize.INTEGER,
            },
            quantidade: {
                type: Sequelize.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
        // Add foreign key constraints here
        await queryInterface.addConstraint('Entradas', {
            fields: ['id_animal'],
            type: 'foreign key',
            name: 'FK_entrada_2',
            references: {
                table: 'Animals',
                field: 'id_animal',
            },
        });
        await queryInterface.addConstraint('Entradas', {
            fields: ['id_pasto_entrada'],
            type: 'foreign key',
            name: 'FK_entrada_3',
            references: {
                table: 'Pasto',
                field: 'id_pasto',
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        // Remove foreign key constraints here
        await queryInterface.removeConstraint('Entradas', 'FK_entrada_3');
        await queryInterface.removeConstraint('Entradas', 'FK_entrada_2');
        await queryInterface.dropTable('Entradas');
    },
};
