"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment_Upvote = sequelize.define(
    "Comment_Upvote",
    {
      comment_id: { type: DataTypes.INTEGER, allowNull: false },
      author_id: { type: DataTypes.INTEGER, allowNull: false },
      vote: {
        type: DataTypes.ENUM("neutral", "upvote", "downvote"),
        allowNull: false,
        defaultValue: "neutral",
      },
    },
    {}
  );
  Comment_Upvote.associate = function (models) {
    // associations can be defined here
    Comment_Upvote.belongsTo(models.Comment, { foreignKey: "comment_id" });
    Comment_Upvote.belongsTo(models.User, { foreignKey: "author_id" });
  };
  return Comment_Upvote;
};
