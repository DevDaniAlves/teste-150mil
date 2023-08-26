const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Importe a instância do sequelize

class PastoModel extends Model {
    static init(sequelize) {
        super.init(
            {
                id_pasto: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                nome_pasto: DataTypes.STRING,
                capacidade: DataTypes.INTEGER,
                quantidade: DataTypes.INTEGER,
            },
            {
                sequelize,
                tableName: 'Pasto',
                timestamps: true,
            }
        );
    }
}

PastoModel.init(sequelize); // Inicialize o modelo com a instância do sequelize

module.exports = PastoModel;
