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
    let empSQL = `SELECT * FROM employee;`;
    connection.query(empSQL, (err, results) => {
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
            name: "department_name",
            type: "input",
            message: "What Department would you like to add?",
        },
    ])
        .then(function (answer) {
            connection.query(
                'INSERT INTO department SET ?',
                {
                    department_name: answer.department_name,
                });
            let deptSQL = 'SELECT * FROM department;';
            connection.query(deptSQL, (err) => {
                if (err) throw err;
                console.log('Your new Department has been added!');
                initApp();
            });
        });
};

function addRoles() {
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the title of your Role?"
        },
        {
            name: "department_name",
            type: "list",
            message: "What department is your Role within?",
            choices: ['Engineering', 'Finance', 'Legal', 'Sales']
        },
        {
            name: "salary",
            type: "input",
            message: "What is the salary of your Role?"
        },
        {
            name: "department_id",
            type: "input",
            message: "What is the Role's department ID?"
        },
    ])
        .then(function (answer) {
            connection.query(
                'INSERT INTO roles SET ?',
                {
                    title: answer.title,
                    department_name: answer.department_name,
                    salary: answer.salary,
                    department_id: answer.department_id,
                });
            let roleSQL = 'SELECT * FROM roles;';
            connection.query(roleSQL, (err) => {
                if (err) throw err;
                console.log('Your new Role has been added!');
                initApp();
            });
        });
};

function addEmployees() {
    inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is your Employee's first name?"
        },
        {
            name: "last_name",
            type: "input",
            message: "What is your Employee's last name?"
        },
        {
            name: "role_id",
            type: "input",
            message: "What is your Employee's role id?"
        },
        {
            name: "manager_id",
            type: "input",
            message: "What is your Employee's manager id?"
        },
    ])
    .then(function (answer) {
        connection.query(
            'INSERT INTO employee SET ?',
            {
                first_name: answer.first_name,
                last_name: answer.last_name,
                role_id: answer.role_id,
                manager_id: answer.manager_id,
            });
        let empSQL = 'SELECT * FROM employee;';
        connection.query(empSQL, (err) => {
            if (err) throw err;
            console.log('Your new Employee has been added!');
            initApp();
        });
    });
};

// function updateEmployeeRole() {
//     inquirer.prompt([
//         {
//             name: "new_first_name",
//             type: "input",
//             message: "What is your Employee's new first name?"
//         },
//         {
//             name: "new_last_name",
//             type: "input",
//             message: "What is your Employee's new last name?"
//         },
//         {
//             name: "new_role_id",
//             type: "input",
//             message: "What is your Employee's new role id?"
//         },
//         {
//             name: "new_manager_id",
//             type: "input",
//             message: "What is your Employee's new manager id?"
//         },
//     ])
//     .then(function (answer) {
//         connection.query(
//             'UPDATE employee SET ?',
//             {
//                 first_name: answer.new_first_name,
//                 last_name: answer.new_last_name,
//                 role_id: answer.new_role_id,
//                 manager_id: answer.new_manager_id,
//             });
//         let empSQL = 'SELECT * FROM employee;';
//         connection.query(empSQL, (err) => {
//             if (err) throw err;
//             console.log('Your Employee has been updated!');
//             initApp();
//         });
//     });
// };