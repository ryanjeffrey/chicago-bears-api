const { Router } = require('express');
const Game = require('../models/Game');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const game = await Game.getById(req.params.id);
    res.json(game);
  })
  .get('/', async (req, res) => {
    const games = await Game.getAll();
    const filtered = games.map(
      ({ id, date, opponent, stadium, score, isWin }) => ({
        id,
        date,
        opponent,
        stadium,
        score,
        isWin,
      })
    );
    res.json(filtered);
  });
