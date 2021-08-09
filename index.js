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
        message: `Is their another employee whose information you'd like to capture?`,
        type: `confirm`,
        name: `additionalEmployee`
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function question() {
    inquirer.prompt(initialQuestion)
        .then((data) => {
            if (data.name === 'Manager') {
                inquirer.prompt(generalQuestions);
                inquirer.prompt(managerQuestion);
            } else if (data.name === 'Engineer') {
                inquirer.prompt(generalQuestions);
                inquirer.prompt(engineerQuestions);
            } else if (data.name === 'Intern') {
                inquirer.prompt(generalQuestions);
                inquirer.prompt(internQuestions);
            } else {
                inquirer.prompt(generalQuestions);
        }})
        inquirer.prompt(additionalEmployee)
}

function init() {
    question()
        .then((data) => {
            do {question()}
            while (data.additionalEmployee);
        })
        .then((data) =>{
            writeToFile('./dist/Profile_Generator.html', generateMarkdown( {...data } ));
        })
}

init();