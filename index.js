const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/utils/generateHTML");

// Returns a new instance of the manager class with the prompted managerQuestions
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
      validate: function (managerEmail) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          managerEmail
        );
        if (valid) {
          return true;
        } else {
          console.log("\nPlease, enter a valid e-mail address");
          return false;
        }
      },
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

// Returns a new instance of the engineer class with the prompted engineerQuestions
const generateEngineer = async () => {
  const engineerQuestions = [
    {
      type: "input",
      name: "engineerName",
      message: "Enter the engineer's name:",
    },
    {
      type: "input",
      name: "engineerId",
      message: "Enter the engineer's employee ID:",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "Enter the engineer's e-mail address:",
      validate: function (engineerEmail) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          engineerEmail
        );
        if (valid) {
          return true;
        } else {
          console.log("\nPlease, enter a valid e-mail address");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "engineerGitHub",
      message: "Enter the engineer's gitHub username:",
    },
  ];

  const engineerObject = await inquirer.prompt(engineerQuestions);

  return new Engineer(
    engineerObject.engineerName,
    engineerObject.engineerId,
    engineerObject.engineerEmail,
    engineerObject.engineerGitHub
  );
};

// Returns a new instance of the intern class with the prompted internQuestions
const generateIntern = async () => {
  const internQuestions = [
    {
      type: "input",
      name: "internName",
      message: "Enter the intern's name:",
    },
    {
      type: "input",
      name: "internId",
      message: "Enter the intern's employee ID:",
    },
    {
      type: "input",
      name: "internEmail",
      message: "Enter the intern's e-mail address:",
      validate: function (internEmail) {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          internEmail
        );
        if (valid) {
          return true;
        } else {
          console.log("\nPlease, enter a valid e-mail address");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "internSchool",
      message: "Enter the intern's school:",
    },
  ];

  const internObject = await inquirer.prompt(internQuestions);

  return new Intern(
    internObject.internName,
    internObject.internId,
    internObject.internEmail,
    internObject.internSchool
  );
};

// Presents the menu once Manager has been created with the options to add nem team members or exit the application
const generateEmployees = async () => {
  const engineersArray = [];
  const internsArray = [];

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
    } else if (employeesOptions.employeeChoices === "Engineer") {
      const newEngineer = await generateEngineer();
      engineersArray.push(newEngineer);
    } else if (employeesOptions.employeeChoices === "Intern") {
      const newIntern = await generateIntern();
      internsArray.push(newIntern);
    }
  }

  return { engineersArray, internsArray };
};

// The core function that generates index.html from the data in the manager and employees objects
const init = async () => {
  const manager = await generateManager();
  const employees = await generateEmployees();
  generateHTML(manager, employees);
};

init();
