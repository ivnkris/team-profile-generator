const fs = require("fs");

// The main function that generates the index.html file from the information passed in via the managerObject and employeesObject
const generateHTML = (managerObject, employeesObject) => {
  let employeeCards = "";

  // Renders the manager card and adds the code to the employeeCards variable
  const renderManagerCard = () => {
    managerCard = `
  <div class="col">
          <div class="card m-3">
            <div class="card-header">
              <h5 class="card-title">${managerObject.name}</h5>
              <h5 class="card-title">Manager</h5>
            </div>
            <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${managerObject.id}</li>
                <li class="list-group-item">
                  E-mail:
                  <a href="mailto:${managerObject.email}">${managerObject.email}</a>
                </li>
                <li class="list-group-item">Office number: ${managerObject.officeNumber}</li>
              </ul>
            </div>
          </div>
        </div>
  `;

    employeeCards += managerCard;
  };

  // Renders an engineer card and adds the code to the employeeCards variable
  const renderEngineerCard = (engineer) => {
    engineerCard = `
    <div class="col">
            <div class="card m-3">
              <div class="card-header">
                <h5 class="card-title">${engineer.name}</h5>
                <h5 class="card-title">Engineer</h5>
              </div>
              <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${engineer.id}</li>
                  <li class="list-group-item">
                    E-mail:
                    <a href="mailto:${engineer.email}">${engineer.email}</a>
                  </li>
                  <li class="list-group-item">
                    gitHub account:
                    <a href="https://github.com/${engineer.gitHub}" , target="_blank"
                      >https://github.com/${engineer.gitHub}</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
    `;

    employeeCards += engineerCard;
  };

  // Renders an intern card and adds the code to the employeeCards variable
  const renderInternCard = (intern) => {
    internCard = `
    <div class="col">
            <div class="card m-3">
              <div class="card-header">
                <h5 class="card-title">${intern.name}</h5>
                <h5 class="card-title">Intern</h5>
              </div>
              <div class="card">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${intern.id}</li>
                  <li class="list-group-item">
                    E-mail:
                    <a href="mailto:${intern.email}">${intern.email}</a>
                  </li>
                  <li class="list-group-item">
                    School: ${intern.school}
                  </li>
                </ul>
              </div>
            </div>
          </div>
    `;

    employeeCards += internCard;
  };

  // The main function to render all team member cards
  const renderCards = () => {
    renderManagerCard();
    employeesObject.engineersArray.forEach(renderEngineerCard);
    employeesObject.internsArray.forEach(renderInternCard);
  };

  renderCards();

  // Template HTML content
  htmlContent = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <header>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid d-flex justify-content-center">
          <span class="navbar-brand mb-0 h1">My Team</span>
        </div>
      </nav>
    </header>
    <main class="container-fluid d-flex flex-wrap justify-content-center">
        ${employeeCards}
    </main>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
      crossorigin="anonymous"
    ></script>
  </body>
</html>
  `;

  // Error handling function for fs.writeFile
  const errorHandling = (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("HTML file successfully generated!");
    }
  };

  // Generates index.html
  fs.writeFile("./dist/index.html", htmlContent, errorHandling);
};

module.exports = generateHTML;
