'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Annotation_Upvotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      annotation_id: {
        type: Sequelize.INTEGER
      },
      author_id: {
        type: Sequelize.INTEGER
      },
      vote: {
        type: Sequelize.ENUM('neutral', 'upvote', 'downvote')
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
    return queryInterface.dropTable('Annotation_Upvotes');
  }
};