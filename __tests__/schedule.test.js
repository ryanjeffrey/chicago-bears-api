const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('schedule routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/schedule should return a list of games on Chicago Bears 2022-2023 Schedule', async () => {
    const resp = await request(app).get('/schedule');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "date": "2022-09-11T05:00:00.000Z",
          "id": "1",
          "isWin": true,
          "opponent": "San Francisco 49ers",
          "score": "19-10",
          "stadium": "Solider Field",
        },
        Object {
          "date": "2022-09-18T05:00:00.000Z",
          "id": "2",
          "isWin": false,
          "opponent": "Green Bay Packers",
          "score": "10-27",
          "stadium": "Lambeau Field",
        },
        Object {
          "date": "2022-09-25T05:00:00.000Z",
          "id": "3",
          "isWin": true,
          "opponent": "Houston Texans",
          "score": "23-20",
          "stadium": "Solider Field",
        },
        Object {
          "date": "2022-10-02T05:00:00.000Z",
          "id": "4",
          "isWin": false,
          "opponent": "New York Giants",
          "score": "12-20",
          "stadium": "Metlife Stadium",
        },
        Object {
          "date": "2022-10-09T05:00:00.000Z",
          "id": "5",
          "isWin": false,
          "opponent": "Minnesota Vikings",
          "score": "22-29",
          "stadium": "U.S. Bank Stadium",
        },
        Object {
          "date": "2022-10-13T05:00:00.000Z",
          "id": "6",
          "isWin": false,
          "opponent": "Washington Commanders",
          "score": "7-12",
          "stadium": "Solider Field",
        },
        Object {
          "date": "2022-10-24T05:00:00.000Z",
          "id": "7",
          "isWin": true,
          "opponent": "New England Patriots",
          "score": "33-14",
          "stadium": "Gillette Stadium",
        },
        Object {
          "date": "2022-10-30T05:00:00.000Z",
          "id": "8",
          "isWin": false,
          "opponent": "Dallas Cowboys",
          "score": "29-49",
          "stadium": "AT&T Stadium",
        },
        Object {
          "date": "2022-11-06T05:00:00.000Z",
          "id": "9",
          "isWin": false,
          "opponent": "Miami Dolphins",
          "score": "32-35",
          "stadium": "Solider Field",
        },
        Object {
          "date": "2022-11-13T06:00:00.000Z",
          "id": "10",
          "isWin": false,
          "opponent": "Detroit Lions",
          "score": "30-31",
          "stadium": "Soldier Field",
        },
        Object {
          "date": "2022-11-20T06:00:00.000Z",
          "id": "11",
          "isWin": null,
          "opponent": "Atlanta Falcons",
          "score": "0-0",
          "stadium": "Mercedes-Benz Stadium",
        },
        Object {
          "date": "2022-11-27T06:00:00.000Z",
          "id": "12",
          "isWin": null,
          "opponent": "New York Jets",
          "score": "0-0",
          "stadium": "Metlife Stadium",
        },
        Object {
          "date": "2022-12-04T06:00:00.000Z",
          "id": "13",
          "isWin": null,
          "opponent": "Green Bay Packers",
          "score": "0-0",
          "stadium": "Soldier Field",
        },
        Object {
          "date": "2022-12-11T06:00:00.000Z",
          "id": "14",
          "isWin": null,
          "opponent": "BYE WEEK",
          "score": null,
          "stadium": null,
        },
        Object {
          "date": "2022-12-18T06:00:00.000Z",
          "id": "15",
          "isWin": null,
          "opponent": "Philadelphia Eagles",
          "score": "0-0",
          "stadium": "Solider Field",
        },
        Object {
          "date": "2022-12-24T06:00:00.000Z",
          "id": "16",
          "isWin": null,
          "opponent": "Buffalo Bills",
          "score": "0-0",
          "stadium": "Soldier Field",
        },
        Object {
          "date": "2023-01-01T06:00:00.000Z",
          "id": "17",
          "isWin": null,
          "opponent": "Detroit Lions",
          "score": "0-0",
          "stadium": "Ford Field",
        },
        Object {
          "date": "2022-01-08T06:00:00.000Z",
          "id": "18",
          "isWin": null,
          "opponent": "Minnesota Vikings",
          "score": "0-0",
          "stadium": "Soldier Field",
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
