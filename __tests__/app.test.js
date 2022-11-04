const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  
  it('/roster should return a list of players on roster', async () => {
    const res = await request(app).get('/roster');
    const expected = roster.map((player) => {
      return {
        number: player.number,
        firstName: player.first_name,
        lastName: player.last_name,
      };
    });
    expect(res.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
