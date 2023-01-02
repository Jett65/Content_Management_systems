DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments(
    ID INT AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (ID)
);

CREATE TABLE roles(
   ID INT AUTO_INCREMENT,
   job_title VARCHAR(30),
   departmentID INT NOT NULL,
   salary DECIMAL NOT NULL,
   PRIMARY KEY (ID),
   FOREIGN KEY (departmentID) REFERENCES departments(ID) 
);

CREATE TABLE employees (
    ID INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    roleID INT NOT NULL,
    manager VARCHAR(30),
    PRIMARY KEY (ID),
    FOREIGN KEY (roleID) REFERENCES roles(ID)
); 