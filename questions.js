const inquirer = require("inquirer");

const choices = [
    {
        type: "list",
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

function menu(a,b) {
    // Displays the menu to the string
    // inquirer
    //     .prompt(choices)
    //     .then((data) => {
    //         console.log(data)        
    //     }); 
    // }
    return a+b
}

module.exports = menu