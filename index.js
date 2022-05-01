// import packages
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: process.env.DB_USER,
        // Your MySQL password
        password: process.env.DB_PASSWORD,

        database: process.env.DB_NAME
    },
    console.log(`Connected to the ${process.env.DB_NAME} database.`)
);

inquirer.prompt([{
    type: 'list',
    name: 'action',
    choices: ['view departments', 'view roles', 'view employee', 'add department', 'add role']
}]).then(answers => {
    if (answers.action === 'view departments') {
        db.query('SELECT * FROM departments', (err, rows) => {
            if (err) console.log(err);
            console.table(rows);
        });
    }
    else if (answers.action === 'view roles') {
        db.query('SELECT * FROM roles', (err, rows) => {
            if (err) console.log(err);
            console.table(rows);
        });
    }
    else if (answers.action === 'view employee') {
        db.query('SELECT * FROM employee', (err, rows) => {
            if (err) console.log(err);
            console.table(rows);

        });
    }
    // recently added 
    else if (answers.action === 'add department') {
        inquirer.prompt([{
            type: 'input',
            name: 'departmentName',
            message: 'what is the name of the new Department?'
        }
        ]).then(answers => {
            db.query(`INSERT INTO departments (names) VALUES ('${answers.departmentName}') `)
            db.query('SELECT * FROM departments', (err, rows) => {
                if (err) console.log(err);
                console.table(rows);
            });
        })
    }
    // add else if statement, to add role, should promt user for name, salary, and department for role.
    // role is then added to data base 
    else if (answers.action === 'add role') {
        inquirer.prompt([
            {
                type: 'input',
                name: 'roleName',
                message: 'what is the new role name?'
            },
            {
                type: 'input',
                name: 'roleSalary',
                message: 'what is the salary for this role?',
            },
            {
                type: 'input',
                name: 'roleDepartment',
                message: 'what is the department for this role?'
            }

        ]).then(answers => {
            db.query(`INSERT INTO roles (title, salary, department_id) VALUES ('${answers.roleName}', '${answers.roleSalary}', '${answers.roleDepartment}') `) 
            db.query('SELECT * FROM roles', (err, rows) => {
                if (err) console.log(err);
                console.table(rows);
            })
           
        })
    }

});













// db.query(`SELECT * FROM department`, (err, rows) => {
//     console.log(rows);
// });

// // Delete a employee

// db.query(`DELETE FROM employee WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Create a employee

// ** example from module 12.2.4 below ** 
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });





