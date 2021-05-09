const Manager = require("../lib/Manager");

describe("Manager", () => {
  const name = "Jessica";
  const id = 4;
  const email = "jessica@company.co.uk";
  const officeNumber = 1123456789;
  const jessica = new Manager(name, id, email, officeNumber);

  test("new Manager instance's name should be set to passed in argument", () => {
    expect(jessica.name).toBe(name);
  });

  test("new Manager instance's id should be set to passed in argument", () => {
    expect(jessica.id).toBe(id);
  });

  test("new Manager instance's email should be set to passed in argument", () => {
    expect(jessica.email).toBe(email);
  });

  test("new Manager instance's officeNumber should be set to passed in argument", () => {
    expect(jessica.officeNumber).toBe(officeNumber);
  });

  test("getName method should return manager's name", () => {
    const jessicaName = jessica.getName();
    expect(jessicaName).toBe(name);
  });

  test("getId method should return manager's id", () => {
    const jessicaId = jessica.getId();
    expect(jessicaId).toBe(id);
  });

  test("getEmail method should return manager's email", () => {
    const jessicaEmail = jessica.getEmail();
    expect(jessicaEmail).toBe(email);
  });

  test("getRole method should return 'Intern'", () => {
    const jessicaRole = jessica.getRole();
    expect(jessicaRole).toBe("Manager");
  });
});
