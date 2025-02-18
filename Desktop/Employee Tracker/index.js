const inquirer = require('inquirer');
const pool = require('./db'); 

async function testDB() {
  try {
    const res = await pool.query('SELECT NOW();'); 
    console.log('Database connected:', res.rows[0]);
    mainMenu(); 
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1);
  }
}

async function mainMenu() {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Exit'
      ]
    }
  ]);

  switch (action) {
    case 'View all departments':
      const departments = await pool.query('SELECT * FROM department;');
      console.table(departments.rows);
      break;
    case 'View all roles':
      const roles = await pool.query('SELECT * FROM role;');
      console.table(roles.rows);
      break;
    case 'View all employees':
      const employees = await pool.query('SELECT * FROM employee;');
      console.table(employees.rows);
      break;
    default:
      console.log('Goodbye!');
      process.exit();
  }

  mainMenu(); 
}

testDB();
