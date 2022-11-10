-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS roster;

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
