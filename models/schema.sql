DROP DATABASE IF EXISTS videogame_db;
CREATE database videogame_db;

USE videogame_db;

CREATE TABLE videogames (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NULL,
  platform VARCHAR(100) NULL,
  year INT NULL,
  genre VARCHAR(100) NULL,
  score INT default 0,
  developer VARCHAR(100) NULL,
  rating VARCHAR(100) NULL,
  PRIMARY KEY (id)
);

SELECT * FROM videogames;