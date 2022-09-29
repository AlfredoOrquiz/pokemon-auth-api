'use strict';

const pokemonModel = (sequelize, DataTypes) => sequelize.define('Pokemon', {
  species:{ 
    type: DataTypes.STRING,
    required: false,
  },
  type: {
    type: DataTypes.STRING,
    required: false
  },
  ability: {
    type: DataTypes.STRING,
    required: false,
  },
  isStarter: {
    type: DataTypes.BOOLEAN,
    required: false,
  },
});

module.exports = pokemonModel;