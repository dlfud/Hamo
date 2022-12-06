CREATE DATABASE Hamo;
USE Hamo;

DESC USER;
SELECT * FROM USER;

DESC `user`;

CREATE TABLE myServer(
    id INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE myServerPost(
    id INT(11) UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    content TEXT NOT NULL,
    create_date DATETIME DEFAULT NOW(),
    myServer_id INT(11) UNSIGNED NOT NULL ,
    FOREIGN KEY(myServer_id) REFERENCES myServer(id) ON DELETE CASCADE
);

SELECT * FROM myServer;
SELECT * FROM myServerPost;