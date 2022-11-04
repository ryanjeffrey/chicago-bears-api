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
};
