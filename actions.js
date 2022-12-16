const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "company_db"
    }
);
// db.query("INSERT INTO employees (id) VALUES(6)",(err,result) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(result)
// });

// View functions

function viewDeparts(departsName) {
    // Displays the departments to the user
    const query = db.query("SELECT * FROM departments")
}

function viewRoles() {
    // Displays the Roles to the user
}

function viewEmployees() {
    // Displays the Employees to the user
}

// Add Functions

function addDepart() {
    // Allows the user to add a department
}

function addRole() {
    // Allows the user to add a role
}

function addEmploy() {
    // Allows the user to add an Employee
}

// Update function

function updateEmpRol() {
    //  Allows the user to update an employees role
}

module.exports = {
    viewDeparts,
    viewRoles,
    viewEmploys: viewEmployees,
    addDepart,
    addRole,
    addEmploy,
    updateEmpRol
};