const pool = require('../utils/pool');
module.exports = class Player {
  constructor(row) {
    this.id = row.id;
    this.firstName = row.first_name;
    this.lastName = row.last_name;
    this.number = row.number;
    this.position = row.position;
    this.height = row.height;
    this.weight = row.weight;
    this.age = row.age;
    this.experience = row.experience;
    this.college = row.college;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from roster');
    return rows.map((playerRow) => new Player(playerRow));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * from roster WHERE id = $1', [id]);
    return new Player(rows[0]);
  }

  static async getOffense() {
    const { rows } = await pool.query('SELECT * from roster limit 11');
    return rows.map((playerRow) => new Player(playerRow));
  }

  static async getDefense() {
    const { rows } = await pool.query('SELECT * from roster limit 11 offset 11');
    return rows.map((playerRow) => new Player(playerRow));
  }
};
