import { regex } from "../../../src/constants";

describe("Sign In", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/sign-in");
  });

  it("input change working: ", () => {
    const username = "aeri@email.com";
    const password = "password";

    cy.get("[data-cy=username]").type(username).should("have.value", username);
    cy.get("[data-cy=password]").type(password).should("have.value", password);
    cy.get("[data-cy=submit]").submit();
    cy.url().should("eq", "http://localhost:3000/");
    cy.getCookie("token").should("exist");
  });

  it("username should failed: ", () => {
    const username = "aeri-@email.com";
    const password = "password-";

    cy.get("[data-cy=username]").type(username);
    cy.get("[data-cy=password]").type(password);
    cy.get("[data-cy=submit]").submit();
    cy.url().should("eq", "http://localhost:3000/sign-in");
    cy.getCookies("token").then(cookies => {
      expect(cookies).to.have.lengthOf(0);
    });
  });
});
