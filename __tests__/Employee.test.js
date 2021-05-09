const Employee = require("../lib/Employee");

describe("Employee", () => {
  const name = "Bob";
  const id = 1;
  const email = "bob@company.co.uk";
  const bob = new Employee(name, id, email);

  test("new Employee instance's name should be set to passed in argument", () => {
    expect(bob.name).toBe(name);
  });

  test("new Employee instance's id should be set to passed in argument", () => {
    expect(bob.id).toBe(id);
  });

  test("new Employee instance's email should be set to passed in argument", () => {
    expect(bob.email).toBe(email);
  });

  test("getName method should return employee's name", () => {
    const bobName = bob.getName();
    expect(bobName).toBe(name);
  });

  test("getId method should return employee's id", () => {
    const bobId = bob.getId();
    expect(bobId).toBe(id);
  });

  test("getEmail method should return employee's email", () => {
    const bobEmail = bob.getEmail();
    expect(bobEmail).toBe(email);
  });

  test("getRole method should return 'Employee'", () => {
    const bobRole = bob.getRole();
    expect(bobRole).toBe("Employee");
  });
});
