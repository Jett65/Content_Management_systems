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
    const names = [];
    const objNames = {};


    // Makes an array with the employees from the database
    db.query("SELECT ID FROM employees",(err,results) => {
        if (err) {
            console.log(err);
        } else {
            // Adds the name to the array
            db.query(`SELECT first_name, last_name FROM employees`,(err,results) => {
                for (let i = 0; i < results.length; i++) {
                    names.push(`${results[i].first_name} ${results[i].last_name}`);
                    objNames[`${names[i]}`] = results[i].first_name;
                };

                //questions for the inquirer
                const questions = [
                    {
                        type: "list",
                        name: "names",
                        message: "Which employees role would you like to update",
                        choices: names

                    },
                    {
                        type: "input",
                        name: "newRole",
                        message: "What is the name of the role the employee will receive"
                    }
                ];

                inquirer
                    .prompt(questions)
                    .then((data) => {

                        // Get the role ID from the name of the role
                        db.query(`SELECT ID FROM roles WHERE job_title="${data.newRole}"`,(err,results) => {
                            if (err) {
                                console.log(err);
                            } else {
                                const rolID = results[0].ID;

                                // Gets the employee ID from the first and last name
                                db.query(`SELECT ID FROM EMPLOYEES WHERE first_name="${objNames[data.names]}"`,(err,results) => {
                                    if (err) {
                                        console.log(err);
                                    } else {
                                        const empID = results[0].ID;

                                        // Updates the employees role
                                        db.query(`UPDATE employees
                                          SET roleID = "${rolID}"
                                          WHERE ID="${empID}"`,(err,results) => {
                                            if (err) {
                                                console.log(err);
                                            } else {
                                                console.log("Role Updated");
                                                process.exit();
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    });
            });
        }
    });
}

module.exports = {
    updateEmpRol
};