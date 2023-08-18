const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../../database/connection');

class SystemFileBucket extends Model {}

SystemFileBucket.init({
    name: {
        type: DataTypes.STRING
    },
}, 
{
    sequelize,
    modelName: 'system_file_bucket' 
});

module.exports = SystemFileBucket;