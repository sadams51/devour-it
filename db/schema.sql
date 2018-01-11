-- Create burgers_db
-- swich to or use burgers_db	
-- create burgers table with fields: 
-- 	id (auto incrementing in, primary key)
-- 	burger_name (string)
-- 	devoured (boolean)
-- 	data (timestamp)

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	'id' int NOT NULL AUTO_INCREMENT,
	'burger_name' varchar(255) NOT NULL,
	'devoured' BOOLEAN DEFAULT false,
	'date' TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)	
);	