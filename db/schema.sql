DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employees (
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    department VARCHAR(30),
    rple VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE roles(
    role_name VARCHAR(30),
    employee_ID INT NOT NULL,
    department VARCHAR(30),
    PRIMARY KEY (role_name)
    FOREIGN KEY (employee_ID)
    REFERENCES employees(id)
);

CREATE TABLE departments (
    department_name VARCHAR(30),
    roles VARCHAR(30),
    FOREIGN KEY (roles)
    REFERENCES roles(role_name)
);