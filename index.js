const inquirer = require("inquirer");

const choices = [
    {
        type: "list",
        name: "choices",
        message: "Select The Option You Wish To Use.",
        choices: [
            "View all Departments",
            "View all Roles",
            "View all Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role"
        ]
    }
];

async function menu_test(a,b) {
    // Displays the menu to the string

    await inquirer
        .prompt(choices)
        .then((data) => {

        }); 
}

function menu() {
    // Displays the menu to the string
    inquirer
        .prompt(choices)
        .then((data) => {
            console.log(data);
        });
}

const menu_test2 = inquirer.prompt(choices).then(async (data) => { 
    await console.log(data)
})

module.exports = menu_test2