const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../database/connection');

class SystemFileType extends Model {}

SystemFileType.init({
    name: {
        type: DataTypes.STRING
    },
}, 
{
    sequelize,
    modelName: 'system_file_type' 
});

module.exports = SystemFileType;