# Employee Tracker

## Description

The Employee Tracker is a command-line application built with **Node.js**, **Inquirer**, and **PostgreSQL**. The application allows business owners to view and manage the departments, roles, and employees in their company. With this tool, users can interactively add, update, and manage their business data, making it easier to organize and plan the company's workforce.

## Table of Contents

- [Installation Instructions](#installation-instructions)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)

## Installation Instructions

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/employee-tracker.git
2. Find project file
3. Install required dependencies
4. Set up the PostgreSQL database and configure your database credentials. You will need to create a .env file to store the database connection details:
5. Create the necessary tables in the database by running the setup script:

## Usage
To start the application run node index.js into your terminal
This will launch the command-line interface, where you will be presented with a list of options to choose from. The available options are:

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role
- After making your choice, follow the prompts to complete the action.

## Features
- View All Departments: Displays a formatted table with the department names and IDs.
- View All Roles: Displays a table showing role titles, role IDs, associated departments, and salaries.
- View All Employees: Displays a table with employee information, including IDs, names, job titles, departments, salaries, and managers.
- Add a Department: Prompts the user to input a department name and adds it to the database.
- Add a Role: Prompts the user for the role name, salary, and department, and adds the role to the database.
- Add an Employee: Prompts the user for the employee's details (name, role, and manager) and adds the employee to the database.
- Update an Employee Role: Prompts the user to select an employee and update their role.


## Technologies Used
- Node.js: JavaScript runtime used to run the application.
- Inquirer: Used to prompt the user for input in the command-line interface.
- PostgreSQL: A relational database to store and manage department, role, and employee data.
- dotenv: Used for environment variable management to secure sensitive information like database credentials.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request

## License
This project is licensed under the MIT License.

## Contact Information
If you have any questions or feedback, please contact me at ashpelzer@aol.com 

## Application Demo
[employee tracker.webm](https://github.com/user-attachments/assets/b9b22d0c-0143-4bad-96a5-38935afbe15b)

