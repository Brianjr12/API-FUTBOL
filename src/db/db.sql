CREATE DATABASE api_teams_db;
USE api_teams_db;
CREATE table teams(
  team_id INT NOT NULL AUTO_INCREMENT,
  teamName VARCHAR (30) UNIQUE NOT NULL ,
  team_country_origin VARCHAR(30) NOT NULL,
  team_country_league VARCHAR(50) NOT NULL,
  team_image VARCHAR(200) NOT NULL,
  team_stadium VARCHAR(50) NOT NULL,
  PRIMARY KEY (team_id)  );

CREATE TABLE players (
player_id INT NOT NULL AUTO_INCREMENT,
teams_id INT NOT NULL,
player_firstName VARCHAR(25) NOT NULL,
player_lastName VARCHAR(25)  NOT NULL,
player_image VARCHAR(200),
player_position VARCHAR(15)  NOT NULL,
player_birthDate date,
player_shirt_number INT NOT NULL,
PRIMARY KEY(player_id),
FOREIGN KEY(teams_id) REFERENCES teams(team_id));

CREATE TABLE competitions(
  competition_id INT NOT NULL AUTO_INCREMENT,
  teams_id INT NOT NULL,
  competition_name VARCHAR(40) NOT NULL,
  competition_image VARCHAR(200) NOT NULL,
  competition_location VARCHAR(60)NOT NULL,
  PRIMARY KEY(competition_id),
  FOREIGN KEY(teams_id) REFERENCES teams(team_id)
);

  CREATE TABLE trophies (
  trophie_id INT NOT NULL AUTO_INCREMENT,
  teams_id INT NOT NULL,
  trophie_title VARCHAR(50) NOT NULL,
  trophie_quantity INT NOT NULL,
  trophie_image VARCHAR(200),
  PRIMARY KEY (trophie_id),
  FOREIGN KEY (teams_id) REFERENCES teams(team_id)
);
