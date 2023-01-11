const inquirer = require("inquirer");
const view = require("./actions/view");
const add = require("./actions/add");
const update = require("./actions/update");


const choice1 = "View all Departments";
const choice2 = "View all Roles";
const choice3 = "View all Employees";
const choice4 = "Add a Department";
const choice5 = "Add a Role";
const choice6 = "Add an Employee";
const choice7 = "Update an Employee Role";

const questions = [
    {
        type: "list",
        name: "choices",
        message: "Select The Option You Wish To Use.",
        choices: [
            choice1,
            choice2,
            choice3,
            choice4,
            choice5,
            choice6,
            choice7
        ]
    }
];



function menu() {
    // Displays the menu to the screen 
    inquirer
        .prompt(questions)
        .then((data) => {
            if (data.choices === choice1) {
                view.viewDeparts();
            } else if (data.choices === choice2) {
                view.viewRoles();
            } else if (data.choices === choice3) {
                view.viewEmployees();
            } else if (data.choices === choice4) {
                add.addDepart();
            } else if (data.choices === choice5) {
                add.addRole();
            } else if (data.choices === choice6) {
                add.addEmploy();
            } else if (data.choices === choice7) {
                update.updateEmpRol();
            } else {
                console.log("Function not added");
            }
        });
}

menu();

module.exports = menu;
