const inquirer = require("inquirer");
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "company_db",
});

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

    const questions = [
        {
            type: "input",
            name: "name",
            message: "What is the new role name"
        },
        {
            type: "input",
            name: "salary",
            massage: "What is the now roles salary"
        },
        {
            type: "input",
            name: "department",
            message: "What department is the new role in"
        }
    ];

    inquirer
        .prompt(questions)
        .then((data) => {

            // Gets the departmentID from the name of the department
            db.query(`SELECT ID FROM departments WHERE name="${data.department}"`,(err,results) => {
                if (err) {
                    console.log(err);
                } else {
                    const depID = results[0].ID;

                    // Adds the new role to the database
                    db.query(`INSERT INTO roles (job_title, departmentID, salary) 
                              VALUES ("${data.name}","${depID}", ${data.salary})`,(err,results) => {
                        console.log("Role Added");
                    });
                }
            });

        });
}

function addEmploy() {
    // Allows the user to add an Employee
    const question = [
        {
            type: "input",
            name: "firstName",
            message: "What is the now employees first name"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is there last name"
        },
        {
            type: "input",
            name: "role",
            message: "What role will the new employee get"
        },
        {
            type: "input",
            name: "manager",
            message: "Who is the new employees manager"
        }
    ];

    inquirer
        .prompt(question)
        .then((data) => {

            // Gets the role ID using the role name
            db.query(`SELECT ID FROM roles WHERE job_title="${data.role}"`,(err,results) => {
                if (err) {
                    console.log(err);
                } else {
                    const roleID = results[0].ID;

                    // Adds the new employee to the database
                    db.query(`INSERT INTO employees (first_name, last_name, roleID, manager)
                              VALUES ("${data.firstName}","${data.lastName}","${roleID}","${data.manager}")`,(err,results) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("employee added");
                        }
                    });

                }
            });

        });
}

module.exports = {
    addDepart,
    addEmploy,
    addRole
};