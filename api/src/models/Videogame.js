const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('videogame',{
        id:{
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        release_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        tags: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        on_sale:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, {timestamps: false})
}