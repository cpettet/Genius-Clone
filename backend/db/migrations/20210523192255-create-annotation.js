'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Annotations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      author_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      track_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      content: {
        allowNull: false,
        type: Sequelize.TEXT,
        unique: true,
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
    return queryInterface.dropTable('Annotations');
  }
};