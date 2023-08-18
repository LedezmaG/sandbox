const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../database/connection');

class Accounts extends Model {
    static associate(models) {
        Files.hasMany(models.Files);
    }
}

Accounts.init({
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    pin: {
        type: DataTypes.STRING
    },
    emal_verified: {
        type: DataTypes.TINYINT
    },
    deleted_at: {
        type: DataTypes.DATE
    },
}, 
{
    sequelize,
    modelName: 'accounts' 
});

module.exports = Accounts;