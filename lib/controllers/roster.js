const { Router } = require('express');
const Player = require('../models/Player');

module.exports = Router()
  .get('/', async (req, res) => {
    const roster = await Player.getAll();
    const filtered = roster.map(({ number, firstName, lastName }) => ({ number, firstName, lastName }));
    res.json(filtered);
  });
