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
        id: player.id,
        firstName: player.firstName,
        lastName: player.lastName,
        number: player.number,
        position: player.position
      };
    });
    expect(res.body).toEqual(expected);
  });

  it('/roster/:id should return player detail', async () => {
    const res = await request(app).get('/roster/3');
    const chaseClaypool = {
      id: '3',
      firstName: 'Chase',
      lastName: 'Claypool',
      number: 10,
      position: 'WR',
      height: '6-4',
      weight: 238,
      age: 24,
      experience: 3,
      college: 'Notre Dame',
    };
    expect(res.body).toEqual(chaseClaypool);
  });

  afterAll(() => {
    pool.end();
  });
});