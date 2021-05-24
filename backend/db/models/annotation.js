"use strict";
module.exports = (sequelize, DataTypes) => {
  const Annotation = sequelize.define(
    "Annotation",
    {
      author_id: { type: DataTypes.INTEGER, allowNull: false },
      track_id: { type: DataTypes.INTEGER, allowNull: false },
      content: { type: DataTypes.TEXT, allowNull: false, unique: true },
    },
    {}
  );
  Annotation.associate = function (models) {
    // associations can be defined here
    Annotation.belongsTo(models.Track, { foreignKey: "track_id" });
    Annotation.belongsTo(models.User, { foreignKey: "author_id" });
    Annotation.hasMany(models.Annotation_Upvote, { foreignKey: "annotation_id" })
  };
  return Annotation;
};
