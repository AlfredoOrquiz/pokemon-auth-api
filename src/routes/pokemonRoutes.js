'use strict';

const express = require('express');
const pokeRouter = express.Router();

const { pokemon } = require('../models/pokemon.js');
const bearerAuth = require('../middleware/bearer.js');
const permissions = require('../middleware/acl.js');

module.exports = pokeRouter;



pokeRouter.get('./pokemon', capabilities('read'), bearerAuth, async (req, res, next) => {
  let list = '';
  if (params.id) {
    let list = await pokemon.get(req.params.id);
  }
  else {
    let list = await pokemon.get();
  }
  res.status(200).json(list);
});

pokeRouter.post('./pokemon', capabilities('create'), bearerAuth, async (req, res, next) => {
  let newRecord = await pokemon.create(req.body);
  res.status(201).json(newRecord);
});

pokeRouter.put('./pokemon', capabilities('update'), bearerAuth, async (req, res, next) => {
  const id = req.params.id;
  const obj = req.body;
  let updatedRecord = await pokemon.update(id, obj)
  res.status(200).json(updatedRecord);
});

pokeRouter.delete('./pokemon', capabilities('delete'), bearerAuth, async (req, res, next) => {
  let deletedRecord = await pokemon.delete(id);
  res.status(200).json(deletedRecord);
});
