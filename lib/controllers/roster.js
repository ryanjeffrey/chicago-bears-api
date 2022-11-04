const { Router } = require('express');
const Player = require('../models/Player');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const player = await Player.getById(req.params.id);
    res.json(player);
  })
  .get('/', async (req, res) => {
    const roster = await Player.getAll();
    const filtered = roster.map(({ id, firstName, lastName, number, position }) => ({
      id,
      firstName,
      lastName,
      number,
      position
    }));
    res.json(filtered);
  });
