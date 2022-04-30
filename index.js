// import packages
const inquirer = require('inquirer');
const mysql = require('mysql2');
// const cTable = require('console.table');

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
    choices: ['view departments', 'view roles', 'view employee']
}]).then(answers => {
    if (answers.action === 'view departments') {
        console.log('view departments');
    }
})











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





