const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;
    
//     console.log('Portfolio complete! Check out index.html to see the output!');
// });
const promptUser = () => {
   return  inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter your GitHub username (Required)',
                validate: githubName => {
                    if (githubName) {
                        return true;
                    } else {
                        console.log('Please enter your GitHub Username');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'about',
                message: 'Provide some information about yourself:'
            }
        ]);
};

const promptProject = portfolioData => {
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`
    =================
    Add a New Project
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter your project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project. (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter a description about your project');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node.js']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to this project. (Required)',
            validate: githubLink => {
                if (githubLink) {
                    return true;
                } else {
                    console.log('Please provide a link to your GitHub Project');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feaature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ]);
};

promptUser().then(answers => console.log(answers)).then(promptProject).then(projectData => { portfolioData.projects.push(projectData);
if (projectData.confirmAddProject) {
    return promptPromptProject(portfolioData);
} else {
    return portfolioData;
}
});