const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Importe a instância do sequelize

class AnimalModel extends Model {
    static init(sequelize) {
        super.init(
            {
                id_animal: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                nome: DataTypes.STRING,
                quantidade: DataTypes.INTEGER,
            },
            {
                sequelize,
                tableName: 'Animals',
                timestamps: true,
                // Outras opções se necessário
            }
        );
    }
}

AnimalModel.init(sequelize); // Inicialize o modelo com a instância do sequelize

module.exports = AnimalModel;
