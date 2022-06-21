const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserModel extends Model {
    static associate(models) {
      // define association here
    }
  }
  UserModel.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    uid: {
      type: DataTypes.INTEGER
    },
    qualification: {
      type: DataTypes.STRING
    },
    upload:{
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'UserInfos',
  });
  return UserModel;
};