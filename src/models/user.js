const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize'); // Importe a instância do sequelize

class UserModel extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                },
                email: DataTypes.STRING,
                firstName: DataTypes.STRING,
                cpf: {
                    type: DataTypes.STRING,
                    allowNull: false,
                    unique: true,
                },
            },
            {
                sequelize,
                tableName: 'Users',
                timestamps: true,
            }
        );
    }
}

UserModel.init(sequelize); // Inicialize o modelo com a instância do sequelize

module.exports = UserModel;
