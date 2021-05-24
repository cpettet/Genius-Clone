'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag_Link = sequelize.define(
    "Tag_Link",
    {
      track_id: { type: DataTypes.INTEGER, allowNull: false },
      tag_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {}
  );
  Tag_Link.associate = function(models) {
    // associations can be defined here
  };
  return Tag_Link;
};