DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employees(
    ID INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),  
    PRIMARY KEY (id)
);

CREATE TABLE departments(
    departmentID INT AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY (departmentID)
);

CREATE TABLE roles(
    role_name VARCHAR(30),
    employeeID INT NOT NULL,
    departmentID INT NOT NULL, 
    FOREIGN KEY (employeeID) REFERENCES employees(ID),
    FOREIGN KEY (departmentID) REFERENCES departments(departmentID)
);