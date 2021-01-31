describe("Edilizia", () => {
  it("loads the page", () => {
    cy.openSite();
    cy.contains('Edilizia').click();
    
    cy.scrollToBottom();

    // Take a snapshot for visual diffing
    cy.percySnapshot();
  });
});