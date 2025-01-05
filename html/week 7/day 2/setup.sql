-- create database(schemas)
CREATE DATABASE car_dealerships;

-- choose which database to use
USE car_dealerships;

-- creating tables
CREATE TABLE cars (
car_id  INT AUTO_INCREMENT PRIMARY KEY,
make VARCHAR(50) NOT NULL,
model VARCHAR(20) NOT NULL,
year SMALLINT NOT NULL,
price DECIMAL(10,2) NOT NULL,
status VARCHAR(10) NOT NULL,
VIN_number VARCHAR(17) NOT NULL
);

CREATE TABLE customers (
customer_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(50),
phone_number VARCHAR(20),
address VARCHAR(200)
);

CREATE TABLE dealerships (
location_id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
location_name VARCHAR(50) NOT NULL,
address VARCHAR(200) NOT NULL,
phone_number VARCHAR(20)
);

CREATE TABLE employees (
employee_id INT AUTO_INCREMENT PRIMARY KEY,
location_id INT NOT NULL,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50)NOT NULL,
email VARCHAR(50) NOT NULL,
phone_number VARCHAR(20) NOT NULL,
hire_date DATE NOT NULL,
position VARCHAR(20),
FOREIGN KEY (location_id) REFERENCES dealerships(location_id) ON DELETE CASCADE
);

CREATE TABLE sales (
sale_id INT AUTO_INCREMENT PRIMARY KEY,
car_id INT NOT NULL,
customer_id INT NOT NULL,
employee_id INT,
sale_date DATE NOT NULL,
final_price DECIMAL(10,2) NOT NULL,
FOREIGN KEY (car_id) REFERENCES cars(car_id) ON DELETE CASCADE, 
FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE,
FOREIGN KEY (employee_id) REFERENCES employees(employee_id) ON DELETE SET NULL
);

CREATE TABLE maintenances (
maintenance_id INT AUTO_INCREMENT PRIMARY KEY,
car_id INT NOT NULL,
record VARCHAR(200),
FOREIGN KEY (car_id) REFERENCES cars(car_id)
);

CREATE TABLE test_drives (
test_drive_id INT AUTO_INCREMENT PRIMARY KEY,
car_id INT NOT NULL,
customer_id INT NOT NULL,
feedback VARCHAR(200),
FOREIGN KEY (car_id) REFERENCES cars(car_id),
FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);