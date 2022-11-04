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

  it('/roster/offense should return a list of the starting offense', async () => {
    const res = await request(app).get('/roster/offense');
    const offense = [
      {
        id: '1',
        firstName: 'Justin',
        lastName: 'Fields',
        number: 1,
        position: 'QB',
      },
      {
        id: '2',
        firstName: 'Darnell',
        lastName: 'Mooney',
        number: 11,
        position: 'WR',
      },
      {
        id: '3',
        firstName: 'Chase',
        lastName: 'Claypool',
        number: 10,
        position: 'WR',
      },
      {
        id: '4',
        firstName: 'David',
        lastName: 'Montgomery',
        number: 32,
        position: 'RB',
      },
      {
        id: '5',
        firstName: 'Khari',
        lastName: 'Blasingame',
        number: 35,
        position: 'FB',
      },
      {
        id: '6',
        firstName: 'Cole',
        lastName: 'Kmet',
        number: 85,
        position: 'TE',
      },
      {
        id: '7',
        firstName: 'Braxton',
        lastName: 'Jones',
        number: 70,
        position: 'LT',
      },
      {
        id: '8',
        firstName: 'Cody',
        lastName: 'Whitehair',
        number: 65,
        position: 'LG',
      },
      {
        id: '9',
        firstName: 'Lucas',
        lastName: 'Patrick',
        number: 62,
        position: 'C',
      },
      {
        id: '10',
        firstName: 'Teven',
        lastName: 'Jenkins',
        number: 76,
        position: 'RG',
      },
      {
        id: '11',
        firstName: 'Larry',
        lastName: 'Borom',
        number: 75,
        position: 'RT',
      },
    ];
    expect(res.body).toEqual(offense);
  });

  afterAll(() => {
    pool.end();
  });
});
