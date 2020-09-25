import pathList from "../../../src/pathList";

describe("Sign In and Out", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:3000${pathList.signIn}`);
  });

  it("input change working: ", () => {
    const username = "aeri@email.com";
    const password = "password";

    cy.get("[data-cy=username]").type(username).should("have.value", username);
    cy.get("[data-cy=password]").type(password).should("have.value", password);
    cy.get("[data-cy=submit]").submit();
    cy.url().should("eq", "http://localhost:3000/");
    cy.getCookie("token").should("exist");

    cy.get("[data-cy=sign-out]").click();
    cy.url().should("eq", `http://localhost:3000${pathList.signIn}`);
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
