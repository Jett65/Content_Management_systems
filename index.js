const inquirer = require("inquirer");
const actions = require("./actions");

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
                actions.viewDeparts();
            } else if (data.choices === choice2) {
                actions.viewRoles();
            } else if (data.choices === choice3) {
                actions.viewEmploys();
            } else if (data.choices === choice4) {
                actions.addDepart();
            } else if (data.choices === choice5) {
                actions.addRole();
            } else if (data.choices === choice6) {
                actions.addEmploy();

            } else {
                console.log("Function not added");
            }
        });
}

menu();
// TODO: FInd out why the program is not stopping 
// TODO: Make the add role get the employeeID using both the first and last name