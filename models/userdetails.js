'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userdetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // const table1 = sequelize.define('UserDetails');
      // const table2 = sequelize.define('UserInfo');
      userdetails.hasOne(models.UserInfo,{foreignKey: 'uid'});
      //table1.hasOne(table2,{foreignKey: 'uid'});
    }
  }
  userdetails.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserDetails',
  });
  return userdetails;
};