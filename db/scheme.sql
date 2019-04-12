### Schema
DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	type varchar(255) NOT NULL,
	swallowed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
