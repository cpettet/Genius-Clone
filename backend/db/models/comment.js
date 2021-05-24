'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      track_id: { type: DataTypes.INTEGER, allowNull: false },
      author_id: { type: DataTypes.INTEGER, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false },
    },
    {}
  );
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.hasMany(models.Comment_Upvote, { foreignKey: "comment_id" });
    Comment.belongsTo(models.User, { foreignKey: "author_id" });
    Comment.belongsTo(models.Track, { foreignKey: "track_id" });
  };
  return Comment;
};