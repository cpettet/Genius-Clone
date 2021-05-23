'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Comment_Upvotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comment_id: {
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
    return queryInterface.dropTable('Comment_Upvotes');
  }
};