// Including Team Profile Classes
const tp = require('./lib/classes');
const inq = require('inquirer');
const fs = require('fs');

// Stores all currently generated employees
let employees = [];

const employee_questions =
[
    // Employee Type
    {
        type: 'list',
        message: 'Which of the following is your role?',
        choices: 
        [
            'Manager',
            'Engineer',
            'Intern'
        ],
        name: 'role'
    },
    // Employee Name
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    // Email Address
    {
        type: 'input',
        message: 'What is your email address (e.g. example@domain.com)?',
        name: 'email'
    }
];

const manager_questions =
[
    // Office Number
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'office_number'
    }
];

const engineer_questions =
[
    // GitHub Profile
    {
        type: 'input',
        message: 'What is your GitHub profile name?',
        name: 'github'
    }
];

const intern_questions =
[
    // School
    {
        type: 'input',
        message: 'What is the name of your school?',
        name: 'school'
    }
];

function createEmployee()
{
    inq.prompt(employee_questions).then ( (answers) => 
    {
        const { role, name, email } = answers;
        const id = employees.length + 1;

        switch (role)
        {
            case 'Manager': inq.prompt(manager_questions).then ( (manager_answers) =>
            {
                const { office_number } = manager_answers;
                // Instantiate the Manager and push to the employees array
                employees.push( new Manager(name, id, email, office_number) );
            });
            break;

            case 'Engineer': inq.prompt(engineer_questions).then ( (engineer_answers) =>
            {
                const { github } = engineer_answers;
                // Instantiate the Manager and push to the employees array
                employees.push( new Engineer(name, id, email, github) );
            });
            break;

            case 'Intern': inq.prompt(intern_questions).then ( (intern_answers) =>
            {
                const { school } = intern_answers;
                // Instantiate the Manager and push to the employees array
                employees.push( new Intern(name, id, email, school) );
            });
            break;
        }
    });
}

createEmployee()