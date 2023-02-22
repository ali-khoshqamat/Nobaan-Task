describe("Navigation Test", () => {
  it("should navigate to the users page", () => {
    cy.visit("/");
    cy.get('a[href="/users"]').click();
    cy.url().should("include", "/users");
  });

  it("should navigate to the verification page", () => {
    cy.visit("/");
    cy.get('a[href="/verification"]').click();
    cy.url().should("include", "/verification");
  });
});
