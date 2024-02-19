const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Function to prompt user for information
const promptUser = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Enter contribution guidelines:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your application:',
            choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'BSD-3-Clause', 'None'],
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:',
        },
    ]);
}

promptUser();

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
