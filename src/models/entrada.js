const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Importe a instância do sequelize

class EntradaModel extends Model {
    static init(sequelize) {
        super.init(
            {
                id_entrada: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                id_animal: DataTypes.INTEGER,
                id_pasto_entrada: DataTypes.INTEGER,
                quantidade: DataTypes.INTEGER,
            },
            {
                sequelize,
                tableName: 'Entradas',
                timestamps: true,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.AnimalModel, { foreignKey: 'id_animal', as: 'animal' });
        this.belongsTo(models.PastoModel, { foreignKey: 'id_pasto_entrada', as: 'pastoEntrada' });
    }
}

EntradaModel.init(sequelize); // Inicialize o modelo com a instância do
