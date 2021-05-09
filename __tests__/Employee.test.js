const Employee = require("../lib/Employee");

describe("Employee", () => {
  const name = "Bob";
  const id = 1;
  const email = "bob@company.co.uk";

  test("getName method should return employee's name", () => {
    const bob = new Employee(name);
    expect(bob.name).toBe(name);
  });
});
