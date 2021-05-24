"use strict";
module.exports = (sequelize, DataTypes) => {
  const Annotation_Upvote = sequelize.define(
    "Annotation_Upvote",
    {
      annotationId: { type: DataTypes.INTEGER, allowNull: false },
      authorId: { type: DataTypes.INTEGER, allowNull: false },
      vote: DataTypes.ENUM("neutral", "upvote", "downvote"),
    },
    {}
  );
  Annotation_Upvote.associate = function (models) {
    // associations can be defined here
    Annotation_Upvote.belongsTo(models.Annotation, { foreignKey: "annotationId" });
    Annotation_Upvote.belongsTo(models.User, { foreignKey: "authorId" });
  };
  return Annotation_Upvote;
};
