"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment_Upvote = sequelize.define(
    "Comment_Upvote",
    {
      commentId: { type: DataTypes.INTEGER, allowNull: false },
      authorId: { type: DataTypes.INTEGER, allowNull: false },
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
    Comment_Upvote.belongsTo(models.Comment, { foreignKey: "commentId" });
    Comment_Upvote.belongsTo(models.User, { foreignKey: "authorId" });
  };
  return Comment_Upvote;
};
