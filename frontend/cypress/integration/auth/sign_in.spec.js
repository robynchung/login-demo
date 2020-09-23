describe("Sign In", () => {
  it("has input", () => {
    cy.visit("http://localhost:3000/sign-in");

    cy.get('input[name="username"]').type("Appleseed");
    cy.get("form").submit();
  });
});
