"use strict";
module.exports = (sequelize, DataTypes) => {
  const Annotation = sequelize.define(
    "Annotation",
    {
      authorId: { type: DataTypes.INTEGER, allowNull: false },
      trackId: { type: DataTypes.INTEGER, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false, unique: true },
    },
    {}
  );
  Annotation.associate = function (models) {
    // associations can be defined here
    Annotation.belongsTo(models.Track, { foreignKey: "trackId" });
    Annotation.belongsTo(models.User, { foreignKey: "authorId" });
    Annotation.hasMany(models.Annotation_Upvote, { foreignKey: "annotationannotationId" })
  };
  return Annotation;
};
