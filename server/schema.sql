CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  userID int(10),
  msgTxt varchar(255),
  objectID int(20) NOT NULL AUTO_INCREMENT,
  timeSent timestamp,
  roomname varchar(20),
  PRIMARY KEY (objectID) 
);

CREATE TABLE users (
  userID int(10) NOT NULL AUTO_INCREMENT,
  username varchar(16),
  PRIMARY KEY (userID)
);

CREATE TABLE friends (
  userID int(10),
  friendID int(10),
  PRIMARY KEY (userID)
);

  /* Describe your table here.*/
  /* text */
  /* objectID */
  /* timeSent */
  /* roomname */

/* Create other tables and define schemas for them here! */

/* users */
-- 1mike
-- 2kristine
-- 3bob
-- 4tim

-- friendsReltn
-- 1,2
-- 1,4
-- 2,3
-- 2,4
-- 4,1
-- 4,2

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

