const Employee = require("../lib/Employee");

describe("Employee", () => {
  const name = "Bob";
  const id = 1;
  const email = "bob@company.co.uk";

  test("nem Employee instance's name should be set to passed in argument", () => {
    const bob = new Employee(name, id, email);
    expect(bob.name).toBe(name);
  });

  test("nem Employee instance's id should be set to passed in argument", () => {
    const bob = new Employee(name, id, email);
    expect(bob.id).toBe(id);
  });
});
