"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          min: 3,
          max: 20,
        },
      },
    },
    {}
  );
  Tag.associate = function (models) {
    // associations can be defined here
    Tag.belongsToMany(models.Track, {
      through: "Tag_Links",
      otherKey: "trackId",
      foreignKey: "tagId",
    });
  };
  return Tag;
};
