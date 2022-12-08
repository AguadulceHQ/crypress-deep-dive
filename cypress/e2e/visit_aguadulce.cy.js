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
    cy.contains("info@aguadulcehq.com");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.videoask-embed__hide_button_wrapper--Qosbq').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Visits homepage and can book a meeting through Videoask', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://aguadulcehq.com');
    cy.get('.videoask-embed__label_wrapper--DXf\\+h').click();
    /* ==== End Cypress Studio ==== */
  });
});
