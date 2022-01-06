'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  State.init({
    date: DataTypes.TEXT,
    state: DataTypes.TEXT,
    fips: DataTypes.INTEGER,
    cases: DataTypes.INTEGER,
    deaths: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};