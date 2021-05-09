const Intern = require("../lib/Intern");

describe("Intern", () => {
  const name = "Jack";
  const id = 3;
  const email = "jack@company.co.uk";
  const school = "University of Birmingham";
  const jack = new Intern(name, id, email, school);

  test("new Intern instance's name should be set to passed in argument", () => {
    expect(jack.name).toBe(name);
  });

  test("new Intern instance's id should be set to passed in argument", () => {
    expect(jack.id).toBe(id);
  });

  test("new Intern instance's email should be set to passed in argument", () => {
    expect(jack.email).toBe(email);
  });

  test("new Intern instance's school should be set to passed in argument", () => {
    expect(jack.school).toBe(school);
  });

  test("getName method should return intern's name", () => {
    const jackName = jack.getName();
    expect(jackName).toBe(name);
  });

  test("getId method should return intern's id", () => {
    const jackId = jack.getId();
    expect(jackId).toBe(id);
  });

  test("getEmail method should return intern's email", () => {
    const jackEmail = jack.getEmail();
    expect(jackEmail).toBe(email);
  });

  test("getSchool method should return intern's school", () => {
    const jackSchool = jack.getSchool();
    expect(jackSchool).toBe(school);
  });

  test("getRole method should return 'Intern'", () => {
    const jackRole = jack.getRole();
    expect(jackRole).toBe("Intern");
  });
});
