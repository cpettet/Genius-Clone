'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    uploader_id: DataTypes.INTEGER,
    artist: DataTypes.STRING,
    album: DataTypes.STRING,
    title: DataTypes.STRING,
    albumart_link: DataTypes.STRING
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
  };
  return Track;
};