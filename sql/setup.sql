CREATE DATABASE portfolio;

USE portfolio;

CREATE TABLE users (
    user_name VARCHAR(50) PRIMARY KEY,
    password VARCHAR(20) NOT NULL,
    role VARCHAR(20)
);

CREATE TABLE skills (
	skill_id INT AUTO_INCREMENT PRIMARY KEY,
	skill_name VARCHAR(20),
    img_name VARCHAR(20) NOT NULL
);

CREATE TABLE project_weeks (
	week VARCHAR(6) PRIMARY KEY,
    title VARCHAR(50) NOT NULL
);

CREATE TABLE project_days (
	day VARCHAR(5) NOT NULL,
    week VARCHAR(6) NOT NULL,
    FOREIGN KEY (week) REFERENCES project_weeks(week),
    CONSTRAINT week_day PRIMARY KEY (week, day)
);

CREATE TABLE messages (
	message_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    send_time VARCHAR(50) DEFAULT(CURRENT_TIMESTAMP()),
    message VARCHAR(1000) NOT NULL
);

INSERT INTO users VALUES ("admin", "password", "administrator");

INSERT INTO skills(skill_name, img_name) VALUES ("HTML", "html.png");
INSERT INTO skills(skill_name, img_name) VALUES ("CSS", "css.png");
INSERT INTO skills(skill_name, img_name) VALUES ("PHP", "php.png");
INSERT INTO skills(skill_name, img_name) VALUES ("JavaScript", "js.png");
INSERT INTO skills(skill_name, img_name) VALUES ("Node.js", "nodejs.png");
INSERT INTO skills(skill_name, img_name) VALUES ("Deno", "deno.png");
INSERT INTO skills(skill_name, img_name) VALUES ("MySQL", "mysql.png");
INSERT INTO skills(skill_name, img_name) VALUES ("C#", "c sharp.png");
INSERT INTO skills(skill_name, img_name) VALUES ("C++", "c++.png");
INSERT INTO skills(skill_name, img_name) VALUES ("Java", "java.png");
INSERT INTO skills(skill_name, img_name) VALUES ("Python", "python.png");
INSERT INTO skills(skill_name, img_name) VALUES ("Git", "git.png");

INSERT INTO project_weeks VALUES ("week 1", "HTML and CSS");
INSERT INTO project_weeks VALUES ("week 3", "JS Fundamentals");
INSERT INTO project_weeks VALUES ("week 5", "Advanced JS");
INSERT INTO project_weeks VALUES ("week 7", "MySQL");
INSERT INTO project_weeks VALUES ("week 9", "Python");

INSERT INTO project_days VALUES ("day 1", "week 1");
INSERT INTO project_days VALUES ("day 2", "week 1");
INSERT INTO project_days VALUES ("day 3", "week 1");
INSERT INTO project_days VALUES ("day 4", "week 1");
INSERT INTO project_days VALUES ("day 5", "week 1");

INSERT INTO project_days VALUES ("day 1", "week 3");
INSERT INTO project_days VALUES ("day 2", "week 3");
INSERT INTO project_days VALUES ("day 3", "week 3");
INSERT INTO project_days VALUES ("day 4", "week 3");
INSERT INTO project_days VALUES ("day 5", "week 3");

INSERT INTO project_days VALUES ("day 1", "week 5");
INSERT INTO project_days VALUES ("day 2", "week 5");
INSERT INTO project_days VALUES ("day 3", "week 5");
INSERT INTO project_days VALUES ("day 4", "week 5");
INSERT INTO project_days VALUES ("day 5", "week 5");

INSERT INTO project_days VALUES ("day 1", "week 7");
INSERT INTO project_days VALUES ("day 2", "week 7");
INSERT INTO project_days VALUES ("day 3", "week 7");
INSERT INTO project_days VALUES ("day 4", "week 7");

INSERT INTO project_days VALUES ("day 1", "week 9");
INSERT INTO project_days VALUES ("day 2", "week 9");
INSERT INTO project_days VALUES ("day 3", "week 9");
INSERT INTO project_days VALUES ("day 4", "week 9");
INSERT INTO project_days VALUES ("day 5", "week 9");

INSERT INTO messages(name, email, message, send_time) VALUES ("name1", "name1@gmail.com", "sample message", "2024-12-01 07:26:00");
INSERT INTO messages(name, email, message, send_time) VALUES ("name2", "name2@gmail.com", "sample message", "2024-12-02 07:26:00");
INSERT INTO messages(name, email, message, send_time) VALUES ("name3", "name3@gmail.com", "sample message", "2024-12-03 07:26:00");