'use strict';
module.exports = (sequelize, DataTypes) => {
  const Annotation = sequelize.define('Annotation', {
    author_id: DataTypes.INTEGER,
    track_id: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {});
  Annotation.associate = function(models) {
    // associations can be defined here
  };
  return Annotation;
};