"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Annotations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      authorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      trackId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Tracks" },
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true,
      },
      startIndex: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      endIndex: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Annotations");
  },
};
