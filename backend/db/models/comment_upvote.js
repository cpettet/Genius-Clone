'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment_Upvote = sequelize.define('Comment_Upvote', {
    comment_id: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER,
    vote: DataTypes.ENUM('neutral', 'upvote', 'downvote')
  }, {});
  Comment_Upvote.associate = function(models) {
    // associations can be defined here
  };
  return Comment_Upvote;
};