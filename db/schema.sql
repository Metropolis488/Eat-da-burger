CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL auto_increment,
    burgerName varchar(100) STRING,
    devoured boolean,
    PRIMARY KEY (id)
);