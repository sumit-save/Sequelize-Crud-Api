const { DataTypes } = require("sequelize");
const sequelize = require("../configs/sequelize");

const posts = sequelize.define("posts", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    isPublished: { type: DataTypes.BOOLEAN, allowNull: false }
}, {
    timestamps: true,
    freezeTableName: true
});

module.exports = posts;