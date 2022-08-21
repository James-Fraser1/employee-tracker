const inquirer = require('inquirer');
const mysql = require('mysql2');
// const consoleTable = require('console.table');

// Connect to database
const connection = mysql.createConnection(
    {
        host: 'localhost',
        port: 3306,
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'gyno-4128',
        database: 'employees'
    },
    console.log('Connected to the employees database.'),
);

connection.connect(function (err) {
    if (err) throw err;
    console.log('SQL Connected');

    initApp();
});

function initApp() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'view',
            message: "What would you like to do?",
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role', 'End Tracker']
        }
    ])
        .then(res => {
            switch (res.view) {
                //after a choice is made, the user will be directed to the associated function
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'Add a Department':
                    addDepartment();
                    break;
                case 'Add a Role':
                    addRoles();
                    break;
                case 'Add an Employee':
                    addEmployees();
                    break;
                case 'Update an Employee Role':
                    updateEmployeeRole();
                    break;
                case 'End Tracker':
                    // connection.end();
                    break;
                default:
                    process.exit();
            };
        });
};

function viewAllDepartments() {
    let sql = `SELECT * FROM department;`;
    connection.query(sql, (err, results) => {
        if (err) {
            return console.error(err)
        } else {
            console.table(results)
        }
        initApp();
    })
};

function viewAllRoles() {
    let sql = `SELECT * FROM roles;`;
    connection.query(sql, (err, results) => {
        if (err) {
            return console.error(err)
        } else {
            console.table(results)
        }
        initApp();
    })
};

function viewAllEmployees() {
    let sql = `SELECT * FROM employee;`;
    connection.query(sql, (err, results) => {
        if (err) {
            return console.error(err)
        } else {
            console.table(results)
        }
        initApp();
    })
};

function addDepartment() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What Department would you like to add?"
        }
    ])
        .then
    initApp();
    let sql = `JOIN * FROM department;`;
    connection.query(sql, (err, results) => {
        if (err) {
            return console.error(err)
        } else {
            console.table(results)
        }
        initApp();
    })
};

function addRoles() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the title of your Role?"
        },
        {
            name: "view",
            type: "list",
            message: "What department is your Role within?",
            choices: ['Engineering', 'Finance', 'Legal', 'Sales']
        },
        {
            name: "name",
            type: "input",
            message: "What is the salary of your Role?"
        },
        {
            name: "name",
            type: "input",
            message: "What is the title of your Role?"
        },
        {
            name: "name",
            type: "input",
            message: "What is the Role's department ID?"
        },
    ])
        .then
    initApp();
};

function addEmployees() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is your Employee's first name?"
        },
        {
            name: "name",
            type: "input",
            message: "What is your Employee's last name?"
        },
        {
            name: "name",
            type: "input",
            message: "What is your Employee's ?"
        },

    ])
    initApp();
};

function updateEmployeeRole() {


    initApp();
};
