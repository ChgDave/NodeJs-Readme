// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input

// Github username, email, project name, short description of your project, license (list), what npm command to install npm dependencies? what npm command to run npm tests? What does the user need to know about running this repo? What does the user need to know about contributing to the repo?
const questions = [
  "What is your Github username?",
  "What is your email address?",
  "What is your project name?",
  "Give us a short description of your project",
  "What is the license for this project?",
  "What npm command was used to install dependencies?",
  "What npm command was used to run npm tests?",
  "What does the user need to know about running this repo?",
  "What does the user need to know about contributing to the repo?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("./README.md", data, (err, data) =>
    err
      ? console.error(err)
      : console.log("Successfully created a README file!")
  );
}

// TODO: Create a function to initialize app
function init() {
  // Use inquirer.prompt to ask the questions
  inquirer
    .prompt([
      {
        type: "input",
        message: questions[0],
        name: githubUserName,
      },
      {
        type: "input",
        message: questions[1],
        name: email,
      },
      {
        type: "input",
        message: questions[2],
        name: projectName,
      },
      {
        type: "input",
        message: questions[3],
        name: description,
      },
      {
        type: "checkbox",
        message: questions[4],
        name: license,
        choices: [
          "The MIT License",
          "Apache 2.0 License",
          "Eclipse Public License 1.0",
          "Mozilla Public License 2.0",
        ],
      },
      {
        type: "input",
        message: questions[5],
        name: installCommand,
      },
      {
        type: "input",
        message: questions[6],
        name: testCommand,
      },
      {
        type: "input",
        message: questions[7],
        name: runRepo,
      },
      {
        type: "input",
        message: questions[8],
        name: contributeRepo,
      },
    ])
    .then((data) => {});
  // Use the writeToFile function to write the data to README
}

// Function call to initialize app
init();
