'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    firstName: {
      field: 'first_name',
      type: DataTypes.STRING,
    },
    lastName: {
      field: 'last_name',
      type: DataTypes.STRING,
    },
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Board);
	  User.hasMany(models.Column);
    User.hasMany(models.Task);
	};
  return User;
};