// generateMarkdown.js

// Function to generate Markdown content
function generateMarkdown(data) {
  return `
# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered under the ${data.license} license. ![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(data.license)}-blue.svg)

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For additional questions, you can contact me via GitHub (${data.githubUsername}) or email (${data.email}).
`;
}

module.exports = generateMarkdown;
