'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      trackId: { type: DataTypes.INTEGER, allowNull: false },
      authorId: { type: DataTypes.INTEGER, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
    },
    {}
  );
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.hasMany(models.Comment_Upvote, { foreignKey: "commentId" });
    Comment.belongsTo(models.User, { foreignKey: "authorId" });
    Comment.belongsTo(models.Track, { foreignKey: "trackId" });
  };
  return Comment;
};