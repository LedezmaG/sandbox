const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../database/connection');

class Files extends Model {
    static associate(models) {
        Files.belongsTo(models.Accounts);
    }
}

Files.init({
    account_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
    path: {
        type: DataTypes.STRING
    },
    public: {
        type: DataTypes.TINYINT
    },
    system_file_type_id: {
        type: DataTypes.INTEGER
    },
    system_file_bucket_id: {
        type: DataTypes.INTEGER
    },
}, 
{
    sequelize,
    modelName: 'files' 
});

module.exports = Files;