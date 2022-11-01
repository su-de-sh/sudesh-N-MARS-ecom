describe("Note app", function () {
  it("front page can be opened", function () {
    cy.visit("http://localhost:3002");
    cy.contains("All Products");
    cy.contains("Add to cart");
  });

  it("login form can be opened", function () {
    cy.visit("http://localhost:3002");
    cy.contains("Login").click();
  });

  it("user can login", function () {
    cy.get("#email").type("user1@gmail.com");
    cy.get("#password").type("user1password");
    cy.get(".primary-button").click();
    cy.contains("USER1");
  });
});
