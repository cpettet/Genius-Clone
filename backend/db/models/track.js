"use strict";
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define(
    "Track",
    {
      uploaderId: { type: DataTypes.INTEGER, allowNull: false },
      artist: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 1,
          max: 255,
        },
      },
      album: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 1,
          max: 255,
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          min: 1,
          max: 255,
        },
      },
      albumArtLink: { type: DataTypes.STRING, allowNull: false },
      lyrics: {
        allowNull: false,
        type: DataTypes.TEXT,
      }
    },
    {}
  );
  Track.associate = function (models) {
    // associations can be defined here
    Track.hasMany(models.Annotation, { foreignKey: "trackId" });
    Track.hasMany(models.Comment, { foreignKey: "trackId" });
    Track.belongsTo(models.User, { foreignKey: "uploaderId" });
    Track.belongsToMany(models.Tag, {
      through: "Tag_Links",
      otherKey: "tagId",
      foreignKey: "trackId",
    });
  };
  return Track;
};
