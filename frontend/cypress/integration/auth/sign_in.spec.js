describe("Sign In", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/sign-in");
  });

  it("input change working: ", () => {
    const username = "aeri@email.com";
    const password = "password";
    cy.get('input[name="username"]').type(username).should("have.value", username);
    cy.get('input[name="password"]').type(password).should("have.value", password);
    cy.get("form").submit();
    cy.wait(2000);
    cy.url().should("eq", "http://localhost:3000/");
  });
});
