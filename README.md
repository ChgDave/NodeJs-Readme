# 09 Node.js Challenge: Professional README Generator

## Description

This is the week 9 challenge project for the Northwestern coding bootcamp. For this project, we are supposed to build am application that will allow the user to create a README file by using a command-line application.

The command-line application dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4).

The application will be invoked by using the following command:

```bash
node index.js
```

## Table of Contents

- [User Story](#user-story)

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Github Repo](#github-repo)

- [Video Link](#video-link)

- [Questions](#questions)

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Installation

To install necessary dependencies, run the following command:

```
npm i
npm i inquirer@8.2.4
```

## Usage

```
When you run the index.js file through node in your command line, you will be presented with the following series of questions:

- What is your Github username?
- What is your email address?
- What is your project name?
- Give us a short description of your project:
- What is the license for this project?
- What npm command was used to install dependencies?
- What npm command was used to run npm tests?
- What does the user need to know about running this repo?
- What does the user need to know about contributing to the repo?

Once you answered all the questions, a README.md file will be automatically generated in the same directory that the index.js file is at.
This README file will display the project title and license badge and link at the top of the README file.
This README file will have a section for project description, table of contents, Installation, Usage, License, Contributing, Tests, and Questions with all the inputs from the questions above.
This Questions section will have user contact information as well as a link to the user github repo.
When the user click on the table of contents, the user will be taken to corresponding sections of the README
```

## License

This project is licensed under MIT License

## Github Repo

https://github.com/ChgDave/NodeJs-Readme

## Video Link

## Questions

If you have any qustions about the repo, open an issue or contact me directly at chgdave@gmail.com. You can also find more of my work at [chgdave](https://github.com/chgdave).

## Review

You are required to submit the following for review:

- A walkthrough video demonstrating the functionality of the application.

- A sample README.md file for a project repository generated using your application

- The URL of the GitHub repository, with a unique name and a README describing the project

---

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
