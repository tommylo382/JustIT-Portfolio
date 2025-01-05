CREATE DATABASE test_db;

USE test_db;

CREATE TABLE employees (
	id INT AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(50),
    last_name VARCHAR(50),
    hire_date DATE,
    salary DECIMAL(10, 2)
);

INSERT INTO employees (first_name, last_name, hire_date, salary) VALUES ("John", "Doe", "2023-01-15", 55000.00);
INSERT INTO employees (first_name, last_name, hire_date, salary) VALUES ("John", "Titor", "2023-01-15", 70000.00);
INSERT INTO employees (first_name, last_name, hire_date, salary) VALUES ("John", "Doe", "2023-01-15", 55000.00);

DELETE FROM employees WHERE id = 3;

UPDATE employees SET salary = 60000 WHERE id = 1;

SELECT first_name, last_name, salary FROM employees WHERE salary > 60000;

SELECT * FROM employees;