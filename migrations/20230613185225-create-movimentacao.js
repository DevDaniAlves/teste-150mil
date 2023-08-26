'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Movimentacaos', {
            id_movimentacao: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            id_pasto_entrada: {
                type: Sequelize.INTEGER,
            },
            id_pasto_saida: {
                type: Sequelize.INTEGER,
            },
            id_animal: {
                type: Sequelize.INTEGER,
            },
            quantidade_animais: {
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
        await queryInterface.addConstraint('Movimentacaos', {
            fields: ['id_pasto_entrada'],
            type: 'foreign key',
            name: 'FK_movimentacao_2',
            references: {
                table: 'Pasto',
                field: 'id_pasto',
            },
        });
        await queryInterface.addConstraint('Movimentacaos', {
            fields: ['id_pasto_saida'],
            type: 'foreign key',
            name: 'FK_movimentacao_3',
            references: {
                table: 'Pasto',
                field: 'id_pasto',
            },
        });
        await queryInterface.addConstraint('Movimentacaos', {
            fields: ['id_animal'],
            type: 'foreign key',
            name: 'FK_movimentacao_4',
            references: {
                table: 'Animals',
                field: 'id_animal',
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        // Remove foreign key constraints here
        await queryInterface.removeConstraint('Movimentacaos', 'FK_movimentacao_4');
        await queryInterface.removeConstraint('Movimentacaos', 'FK_movimentacao_3');
        await queryInterface.removeConstraint('Movimentacaos', 'FK_movimentacao_2');
        await queryInterface.dropTable('Movimentacaos');
    },
};
