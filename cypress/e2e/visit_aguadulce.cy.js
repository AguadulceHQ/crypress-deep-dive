describe("Homepage is displaying core elements", () => {
  it("Visits Aguadulce's homepage and checks that the Code motto is there", () => {
    cy.visit("https://aguadulcehq.com");

    cy.contains("Code");
  });
  it("Click on the menu contact us item and make sure the section is displayed", () => {
    cy.visit("https://aguadulcehq.com");

    cy.get(".hamburger-box").click();
    cy.contains("Contact Us").click();
    cy.url().should("include", "/#contact-us");
  });
});
