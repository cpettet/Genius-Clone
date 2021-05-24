"use strict";
module.exports = (sequelize, DataTypes) => {
  const Annotation_Upvote = sequelize.define(
    "Annotation_Upvote",
    {
      annotation_id: { type: DataTypes.INTEGER, allowNull: false },
      author_id: { type: DataTypes.INTEGER, allowNull: false },
      vote: DataTypes.ENUM("neutral", "upvote", "downvote"),
    },
    {}
  );
  Annotation_Upvote.associate = function (models) {
    // associations can be defined here
  };
  return Annotation_Upvote;
};
