'use strict';

const userModel = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');
const pokemonModel = require('./pokemon.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const sequelize = new Sequelize(DATABASE_URL);

const pokemonSchema = pokemonModel(sequelize, DataTypes);
const userSchema = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  pokemon: new Collection(pokemonSchema),
  users: new Collection(userSchema),
};
