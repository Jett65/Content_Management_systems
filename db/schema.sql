DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),  
    PRIMARY KEY (id)
);

CREATE TABLE roles(
    role_name VARCHAR(30),
    employee_id INT NOT NULL,
    role_id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (role_id),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE departments (
    departments_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);