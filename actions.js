const inquirer = require("inquirer");
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
        console.log(results);
    });
}

function viewRoles() {
    // Displays the Roles to the user
    db.query("SELECT role_name FROM roles",(err,results) => {
        console.log(results);
    });
}

function viewEmployees() {
    // Displays the Employees to the user
    db.query("SELECT first_name, last_name FROM employees",(err,results) => {
        console.log(results);
    });
}

// Add Functions

function addDepart() {
    // Allows the user to add a department
    const question = [
        {
            type: "input",
            name: "depName",
            message: "What is the name of the new department: "
        }
    ];

    inquirer
        .prompt(question)
        .then((data) => {
            db.query(`INSERT INTO departments (department_name) VALUES ("${data.depName}")`,(err,results) => {
                err ? console.log(err) : console.log(`The ${data.depName} department was added`);
            });
        });
}

function addRole() {
    // Allows the user to add a role 

    // role name
    // employeeID
    // departmentID

    const questions = [
        {
            type: "input",
            name: "rolName",
            message: "What is the name of the now role: "
        },
        {
            type: "input",
            name: "dep",
            message: "What department this role in: "
        },
        {
            type: "input",
            name: "empFirst",
            message: "What is the employees who is getting the roles first name: "
        },
        {
            type: "input",
            name: "empLast",
            message: "What is there last name: "
        }
    ];

    inquirer
        .prompt(questions)
        .then((data) => {
            const empName = db.query(`SELECT ID FROM employees where first_name=${data.empFirst}, last_name=${data.epmLast}`,(err,results) => {
                if (err) {
                    console.log(err);
                }
                else {
                    return results;
                }
            });

            // TODO: get the department Id froe the department name
        });


}

function addEmploy() {
    // Allows the user to add an Employee
    const question = [
        {
            type: "input",
            name: "firstName",
            message: "What is the new employees first name: "
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the new employees last name: "
        }
    ];

    inquirer
        .prompt(question)
        .then((data) => {
            db.query(`INSERT INTO employees (first_name, last_name) VALUES ("${data.firstName}", "${data.lastName}")`,(err,results) => {
                err ? console.log(err) : console.log(`${data.firstName} ${data.lastName} was added`);
            });
        });
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
