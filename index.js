const inquirer = require("inquirer");
const actions = require("./actions")

const choice1 = "View all Departments"
const choice2 = "View all Roles" 
const choice3 = "View all Employees"
const choice4 = "Add a Department"
const choice5 = "Add a Role"
const choice6 = "Add an Employee"
const choice7 = "Update an Employee Role"

const choices = [
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

async function menu_test() {
    // Displays the menu to the string

    await inquirer
        .prompt(choices)
        .then((data) => {
            console.log(data)
            if (choice1 === data) {
                console.log("Yes")
                actions.viewDeparts(data)
            } else {
                console.log("Nop")
            }
            return data
        }); 
}

// function menu() {
//     // Displays the menu to the string
//     inquirer
//         .prompt(choices)
//         .then((data) => {
//             console.log(data);
//         });
// }

// const menu_test2 = inquirer.prompt(choices).then(async (data) => { 
//     await console.log(data)
// })

menu_test()