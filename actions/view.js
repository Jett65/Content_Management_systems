const inquirer = require("inquirer");
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "company_db",
});

function viewDeparts() {
    // Displays the departments to the user
    db.query("SELECT * FROM departments",(err,results) => {
        if (err) {
            console.log(err);
        } else {
            console.table(results);
        }

    });
}

function viewRoles() {
    // Displays the Roles to the user
    db.query(`SELECT roles.job_title,roles.ID, departments.name AS department, roles.salary
             FROM roles
             INNER JOIN departments ON roles.departmentID=departments.ID`,
        (err,results) => {
            if (err) {
                console.log(err);
            } else {
                console.table(results);
            }

        });
}

function viewEmployees() {
    // Displays the Employees to the user
    db.query(`SELECT employees.ID, employees.first_name, employees.last_name, roles.job_title, departments.name AS department, roles.salary, employees.manager
              FROM employees
              INNER JOIN roles ON employees.roleID=roles.ID
              INNER JOIN departments ON roles.departmentID=departments.ID`,
        (err,results) => {
            if (err) {
                console.log(err);
            } else {
                console.table(results);
            }

        });
}

module.exports = {
    viewDeparts,
    viewRoles,
    viewEmployees
};