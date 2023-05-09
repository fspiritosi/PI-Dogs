const {DataTypes} = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define("temperament", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoincrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}