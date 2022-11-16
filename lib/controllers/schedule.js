const { Router } = require('express');
const Game = require('../models/Game');

module.exports = Router().get('/', async (req, res) => {
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
