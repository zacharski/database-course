\c postgres
DROP DATABASE IF EXISTS taskone;
CREATE DATABASE taskone;
\c taskone

CREATE TABLE movies (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	boxoffice NUMERIC,
	tmeter NUMERIC,
	rating TEXT NOT NULL,
	mlength NUMERIC,
	genre TEXT,
	released DATE
);

INSERT INTO movies (title, boxoffice, tmeter, rating, mlength, genre,released) VALUES
  ('The Lion King', 968.5, 53, 'PG', 110, 'Animation', '2019-07-29'),
  ('Spider-Man Far From Home', 370.97, 90, 'PG-13', 130, 'Action', '2019-07-02'),
  ('Dora And The Lost City of Gold', 63.7, 83, 'PG', 102, 'Action', '2019-08-09'),
  ('Angel Has Fallen', 21.3, 39, 'R', 114, 'Action', '2019-08-23'),
  ('Yesterday', 130.8, 63, 'PG-13', NULL, 'Comedy', '2019-06-28'),
  ('Avengers: Endgame', 2796, 94, 'PG-13', 182, 'Action', '2019-07-30'),
  ('Echo In The Canyon', 3.2, 94, 'PG-13', 82, 'Documentary', '2019-05-24'),
  ('Once Upon A Time In Hollywood', 239.8, 85, 'R', 159, 'Comedy', '2019-05-26'),
  ('Hobbs And Shaw', 601.3, 67, 'PG-13', NULL, 'Action', '2019-08-02'),
  ('Ready Or Not', 13.8, 87, 'R', 95, 'Horror', '2019-08-21'),
  ('The Peanut Butter Falcon', 3.7, 95, 'PG-13', 93, 'Drama', '2019-08-09'),
  ('The Art of Racing In The Rain', 26.2, 42, 'PG', NULL, 'Drama', '2019-08-09');  
