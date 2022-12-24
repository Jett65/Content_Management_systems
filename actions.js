const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "company_db",
});
// View functions

function viewDeparts() {
    // Displays the departments to the user
    db.query("SELECT department_name FROM departments",(err,results) => {
        console.table(results);
    });
}

function viewRoles() {
    // Displays the Roles to the user
    db.query("SELECT role_name FROM roles",(err,results) => {
        console.table(results);
    });
}

function viewEmployees() {
    // Displays the Employees to the user
    db.query("SELECT first_name, last_name FROM employees",(err,results) => {
        console.table(results);
    });
}

// Add Functions

function addDepart(departmentName) {
    // Allows the user to add a department
    db.query(
        `INSERT INTO departments (department_name)
        VALUES (${departmentName})`
    );
}

function addRole() {
    // Allows the user to add a role
    db.query("INSERT INTO ro"); // TODO: Find out how to add a role
}

function addEmploy(empFirst,empLast) {
    // Allows the user to add an Employee
    db.query(
        `INSERT INTO employees (first_name, last_name)
        VALUES (${empFirst}, ${empLast})`
    );
}

// Update function

function updateEmpRol() {
    //  Allows the user to update an employees role
    // TODO: Find out how to update
}

module.exports = {
    viewDeparts,
    viewRoles,
    viewEmploys: viewEmployees,
    addDepart,
    addRole,
    addEmploy,
    updateEmpRol,
};
