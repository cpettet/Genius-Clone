'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag_Link = sequelize.define(
    "Tag_Link",
    {
      trackId: { type: DataTypes.INTEGER, allowNull: false },
      tagId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Tag_Link.associate = function(models) {
    // associations can be defined here
  };
  return Tag_Link;
};