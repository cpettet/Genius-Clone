'use strict';
module.exports = (sequelize, DataTypes) => {
  const Annotation_Upvote = sequelize.define('Annotation_Upvote', {
    annotation_id: DataTypes.INTEGER,
    author_id: DataTypes.INTEGER,
    vote: DataTypes.ENUM('neutral', 'upvote', 'downvote')
  }, {});
  Annotation_Upvote.associate = function(models) {
    // associations can be defined here
  };
  return Annotation_Upvote;
};