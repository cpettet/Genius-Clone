'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tracks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      uploaderId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      artist: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      album: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      lyrics: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      albumArtLink: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tracks');
  }
};