CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
    id int NOT NULL auto_increment,
    burgerName varchar(100) NOT NULL,
    devoured boolean,
    PRIMARY KEY (id)
);