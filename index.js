const inquirer = require(`inquirer`);
const fs = require(`fs`);

const initialQuestion = [
    {
        message: `What is your Role?`,
        type: `list`,
        choices: [`Employee`, `Manager`, `Engineer`, `Intern`],
        name:`role`,
    }
];

const generalQuestions = [
    {
        message: `What is your name?`,
        type: `input`,
        name: `employeeName`
    },
    {
        message: `What is your 6 digit id#?`,
        type: `input`,
        name: `idNumber`
    },
    {
        message: `What is your employee email?`,
        type: `input`,
        name: `email`
    },
];

const managerQuestion = [
    {
        message: `What is your office number?`,
        type: `input`,
        name: `officeNumber`
    },
];

const engineerQuestions = [
    {
        message: `What is your GitHub username?`,
        type: `input`,
        name: `github`
    },
];

const internQuestions = [
    {
        message: `What school do you attend?`,
        type: `input`,
        name: `school`
    },
];

const additionalEmployee = [
    {
        message: `Is their an employee whose information youd like to capture?`,
        type: `input`,
        name: `additionalEmployee`
    },
]