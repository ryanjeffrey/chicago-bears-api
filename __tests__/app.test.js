const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { roster } = require('../lib/roster-data');

describe('roster routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/roster should return a list of players on roster', async () => {
    const res = await request(app).get('/roster');
    const expected = roster.map((player) => {
      return {
        number: player.number,
        firstName: player.firstName,
        lastName: player.lastName,
      };
    });
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
