const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Importe a instância do sequelize

class MovimentacaoModel extends Model {
    static init(sequelize) {
        super.init(
            {
                id_movimentacao: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                id_pasto_entrada: DataTypes.INTEGER,
                id_pasto_saida: DataTypes.INTEGER,
                id_animal: DataTypes.INTEGER,
                quantidade_animais: DataTypes.INTEGER,
            },
            {
                sequelize,
                tableName: 'Movimentacaos',
                timestamps: true,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.PastoModel, { foreignKey: 'id_pasto_entrada', as: 'pastoEntrada' });
        this.belongsTo(models.PastoModel, { foreignKey: 'id_pasto_saida', as: 'pastoSaida' });
        this.belongsTo(models.AnimalModel, { foreignKey: 'id_animal', as: 'animal' });
    }
}

MovimentacaoModel.init(sequelize); // Inicialize o modelo com a instância do sequelize

module.exports = MovimentacaoModel;
