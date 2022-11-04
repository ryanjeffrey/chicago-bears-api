const { Router } = require('express');
const Player = require('../models/Player');

module.exports = Router()
  .get('/offense', async (req, res) => {
    const offense = await Player.getOffense();
    const filtered = offense.map(
      ({ id, firstName, lastName, number, position }) => ({
        id,
        firstName,
        lastName,
        number,
        position,
      })
    );
    res.json(filtered);
  })

  .get('/defense', async (req, res) => {
    const defense = await Player.getDefense();
    const filtered = defense.map(
      ({ id, firstName, lastName, number, position }) => ({
        id,
        firstName,
        lastName,
        number,
        position,
      })
    );
    res.json(filtered);
  })

  .get('/:id', async (req, res) => {
    const player = await Player.getById(req.params.id);
    res.json(player);
  })

  .get('/', async (req, res) => {
    const roster = await Player.getAll();
    const filtered = roster.map(
      ({ id, firstName, lastName, number, position }) => ({
        id,
        firstName,
        lastName,
        number,
        position,
      })
    );
    res.json(filtered);
  });
