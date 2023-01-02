const inquirer = require("inquirer");
const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "company_db",
});

function updateEmpRol() {
    //  Allows the user to update an employees role

    const questions = [
        {
            type: "input",
            name: "firstName",
            message: "What is the employees first name:"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the employees last name:"
        },
        {
            type: "input",
            name: "upRol",
            message: "What is the new role they are reserving:"
        }
    ];

    inquirer
        .prompt(questions)
        .then((data) => {

            // Gets the employeesID from the first and last name
            db.query(`SELECT ID FROM employees WHERE first_name="${data.firstName}"`,(err,results) => {
                if (err) {
                    console.log(err);
                } else {
                    const empID = results[0].ID;

                    // Updates the employees role
                    db.query(`UPDATE roles SET role_name = "${data.upRol}" WHERE employeeID = "${empID}"`,(err,results) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("Role Updated");
                        }
                    });
                }

            });
        });

}

module.exports = {
    updateEmpRol
};