const { expect, test } = require("@jest/globals");
const Employee = require("../lib/Employee");

describe("Employee", () => {
  const name = "Bob";
  const id = 1;
  const email = "bob@company.co.uk";
  const bob = new Employee(name, id, email);

  test("nem Employee instance's name should be set to passed in argument", () => {
    expect(bob.name).toBe(name);
  });

  test("nem Employee instance's id should be set to passed in argument", () => {
    expect(bob.id).toBe(id);
  });

  test("nem Employee instance's email should be set to passed in argument", () => {
    expect(bob.id).toBe(id);
  });

  test("getName method should return employee's name", () => {
    const bobName = bob.getName();
    expect(bobName).toBe(name);
  });
});
