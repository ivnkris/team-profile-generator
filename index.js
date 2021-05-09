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

  return new Manager(
    managerObject.managerName,
    managerObject.managerId,
    managerObject.managerEmail,
    managerObject.managerOfficeNumber
  );
};

const generateEngineer = () => {
  console.log("Engineer Generated");
};

const generateIntern = () => {
  console.log("Intern generated");
};

const generateEmployees = async () => {
  const employeesMenu = [
    {
      type: "list",
      name: "employeeChoices",
      choices: ["Engineer", "Intern", "None"],
      message: "Select what other role you would like to add to your team:",
    },
  ];

  let isLooping = true;

  while (isLooping) {
    const employeesOptions = await inquirer.prompt(employeesMenu);
    if (employeesOptions.employeeChoices === "None") {
      isLooping = false;
      console.log("Programme stopped");
    } else if (employeesOptions.employeeChoices === "Engineer") {
      generateEngineer();
    } else if (employeesOptions.employeeChoices === "Intern") {
      generateIntern();
    }
  }
};

const init = async () => {
  const manager = await generateManager();
  const employees = generateEmployees();
  generateHTML(manager, employees);
};

init();
