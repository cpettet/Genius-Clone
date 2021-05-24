"use strict";
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define(
    "Track",
    {
      uploader_id: { type: DataTypes.INTEGER, allowNull: false },
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
      albumart_link: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Track.associate = function (models) {
    // associations can be defined here
    Track.hasMany(models.Annotation, { foreignKey: "track_id" });
    Track.hasMany(models.Comment, { foreignKey: "track_id" });
    Track.belongsTo(models.User, { foreignKey: "uploader_id" });
    Track.belongsToMany(models.Tag, {
      through: "Tag_Links",
      otherKey: "tag_id",
      foreignKey: "track_id",
    });
  };
  return Track;
};
