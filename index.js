const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/utils/generateHTML");

const generateManager = async () => {
  const managerQuestions = [
    {
      type: "input",
      name: "managerName",
      message: "Enter the manager's name:",
    },
    {
      type: "input",
      name: "managerId",
      message: "Enter the manager's employee ID:",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "Enter the manager's e-mail address:",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "Enter the manager's office number:",
    },
  ];

  const managerObject = await inquirer.prompt(managerQuestions);

  return managerObject;
};

const generateEmployees = () => {};

const init = async () => {
  const manager = await generateManager();
  const employees = generateEmployees();
  generateHTML(manager, employees);
};

init();
