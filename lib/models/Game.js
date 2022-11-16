const pool = require('../utils/pool');
module.exports = class Game {
  constructor(row) {
    this.id = row.id;
    this.date = row.date;
    this.opponent = row.opponent;
    this.stadium = row.stadium;
    this.score = row.score;
    this.isWin = row.is_win;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from schedule');
    return rows.map((gameRow) => new Game(gameRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from schedule WHERE id = $1', [
      id,
    ]);
    return new Game(rows[0]);
  }
};
