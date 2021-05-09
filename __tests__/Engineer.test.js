const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const name = "Paul";
  const id = 2;
  const email = "paul@company.co.uk";
  const gitHub = "github.com/paul";
  const paul = new Engineer(name, id, email, gitHub);

  test("new Engineer instance's name should be set to passed in argument", () => {
    expect(paul.name).toBe(name);
  });

  test("new Engineer instance's id should be set to passed in argument", () => {
    expect(paul.id).toBe(id);
  });

  test("new Engineer instance's email should be set to passed in argument", () => {
    expect(paul.email).toBe(email);
  });

  test("new Engineer instance's github should be set to passed in argument", () => {
    expect(paul.gitHub).toBe(gitHub);
  });

  test("getName method should return engineer's name", () => {
    const paulName = paul.getName();
    expect(paulName).toBe(name);
  });

  test("getId method should return engineer's id", () => {
    const paulId = paul.getId();
    expect(paulId).toBe(id);
  });

  test("getEmail method should return engineer's email", () => {
    const paulEmail = paul.getEmail();
    expect(paulEmail).toBe(email);
  });

  test("getGitHub method should return engineer's gitHub address", () => {
    const paulGitHub = paul.getGitHub();
    expect(paulGitHub).toBe(gitHub);
  });

  test("getRole method should return 'Engineer'", () => {
    const paulRole = paul.getRole();
    expect(paulRole).toBe("Engineer");
  });
});
