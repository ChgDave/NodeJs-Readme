// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  //only 4 license options switch statement
  switch (license) {
    case "The MIT License":
      licenseBadge = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "Apache 2.0 License":
      licenseBadge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
      break;
    case "Eclipse Public License 1.0":
      licenseBadge = "https://img.shields.io/badge/License-EPL_1.0-red.svg";
      break;
    case "Mozilla Public License 2.0":
      licenseBadge =
        "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
      break;
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // only 4 license options
  let licenseLink;
  //only 4 license options switch statement
  switch (license) {
    case "The MIT License":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "Apache 2.0 License":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "Eclipse Public License 1.0":
      licenseLink = "https://opensource.org/licenses/EPL-1.0";
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "https://opensource.org/licenses/MPL-2.0";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `[![${license}](${renderLicenseBadge(license)})](${renderLicenseLink(
      license
    )})`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

license section

## Description

${data.description}

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [License](#license)

- [Contributing](#contributing)

- [Tests](#tests)

- [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

${data.installCommand}

## Usage

${data.runRepo}

## License

This project is licensed under ${data.license}

## Contributing

${data.contributeRepo}

## Tests

To run tests, run the following commmand:

${data.runRepo}

## Questions

If you have any qustions about the repo, open an issue or contact me directly at ${data.email}. You can also find more of my work at [${data.githubUserName}](https://github.com/${data.githubUserName})
`;
}

module.exports = generateMarkdown;
