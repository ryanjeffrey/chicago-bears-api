-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS roster;
DROP TABLE IF EXISTS schedule;

CREATE TABLE roster (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  number INT NOT NULL,
  position VARCHAR NOT NULL,
  height VARCHAR NOT NULL,
  weight INT NOT NULL,
  age INT NOT NULL,
  experience INT NOT NULL,
  college VARCHAR NOT NULL
);

CREATE TABLE schedule (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  date DATE,
  opponent VARCHAR,
  stadium VARCHAR,
  score VARCHAR,
  is_win BOOLEAN
);

INSERT INTO roster (first_name, last_name, number, position, height, weight, age, experience, college)
VALUES 
('Justin', 'Fields', 1, 'QB', '6-3', 228, 23, 2, 'Ohio State'),
('Darnell', 'Mooney', 11, 'WR', '5-11', 173, 25, 3, 'Tulane'),
('Chase', 'Claypool', 10, 'WR', '6-4', 238, 24, 3, 'Notre Dame'),
('David', 'Montgomery', 32, 'RB', '5-11', 224, 25, 4, 'Iowa State'),
('Khari', 'Blasingame', 35, 'FB', '6-0', 233, 26, 4, 'Vanderbilt'),
('Cole', 'Kmet', 85, 'TE', '6-6', 260, 23, 3, 'Notre Dame'),
('Braxton', 'Jones', 70, 'LT', '6-5', 310, 23, 1, 'Southern Utah State'),
('Cody', 'Whitehair', 65, 'LG', '6-3', 316, 30, 7, 'Kansas State'),
('Lucas', 'Patrick', 62, 'C', '6-3', 313, 29, 6, 'Duke'),
('Teven', 'Jenkins', 76, 'RG', '6-6', 321, 24, 2, 'Oklahoma State'),
('Larry', 'Borom', 75, 'RT', '6-5', 333, 23, 2, 'Missouri'),
('Trevis', 'Gipson', 99, 'DL', '6-4', 263, 25, 3, 'Tulsa'),
('Justin', 'Jones', 93, 'DL', '6-3', 309, 26, 5, 'North Carolina State'),
('Angelo', 'Blackson', 90, 'DL', '6-4', 315, 29, 8, 'Auburn'),
('Al-Quadin', 'Muhammad', 55, 'DL', '6-3', 250, 27, 6, 'Miami'),
('Nicholas', 'Morrow', 53, 'LB', '6-0', 216, 27, 5, 'Greenville'),
('Jack', 'Sanborn', 57, 'LB', '6-2', 234, 22, 1, 'Wisconsin'),
('Joe', 'Thomas', 45, 'LB', '6-1', 227, 31, 8, 'South Carolina State'),
('Jaylon', 'Johnson', 33, 'CB', '6-0', 196, 23, 3, 'Utah'),
('Kyler', 'Gordon', 6, 'CB', '6-0', 200, 22, 1, 'Washington'),
('Eddie', 'Jackson', 4, 'S', '6-0', 206, 28, 6, 'Alabama'),
('Jaquan', 'Brisker', 9, 'S', '6-1', 200, 23, 1, 'Penn State');

INSERT INTO schedule (date, opponent, stadium, score, is_win)
VALUES 
('2022-09-11', 'San Francisco 49ers', 'Solider Field', '19-10', TRUE),
('2022-09-18', 'Green Bay Packers', 'Lambeau Field', '10-27', FALSE),
('2022-09-25', 'Houston Texans', 'Solider Field', '23-20', TRUE),
('2022-10-02', 'New York Giants', 'Metlife Stadium', '12-20', FALSE),
('2022-10-09', 'Minnesota Vikings', 'U.S. Bank Stadium', '22-29', FALSE),
('2022-10-13', 'Washington Commanders', 'Solider Field', '7-12', FALSE),
('2022-10-24', 'New England Patriots', 'Gillette Stadium', '33-14', TRUE),
('2022-10-30', 'Dallas Cowboys', 'AT&T Stadium', '29-49', FALSE),
('2022-11-06', 'Miami Dolphins', 'Solider Field', '32-35', FALSE),
('2022-11-13', 'Detroit Lions', 'Soldier Field', '30-31', FALSE),
('2022-11-20', 'Atlanta Falcons', 'Mercedes-Benz Stadium', '0-0', null),
('2022-11-27', 'New York Jets', 'Metlife Stadium', '0-0', null),
('2022-12-04', 'Green Bay Packers', 'Soldier Field', '0-0', null),
('2022-12-11', 'BYE WEEK', null, null, null),
('2022-12-18', 'Philadelphia Eagles', 'Solider Field', '0-0', null),
('2022-12-24', 'Buffalo Bills', 'Soldier Field', '0-0', null),
('2023-01-01', 'Detroit Lions', 'Ford Field', '0-0', null),
('2022-01-08', 'Minnesota Vikings', 'Soldier Field', '0-0', null);
