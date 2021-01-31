describe("Ferramenta", () => {
  it("loads the page", () => {
    cy.openSite();
    cy.contains('Ferramenta').click();
    
    cy.scrollToBottom();

    // Take a snapshot for visual diffing
    cy.percySnapshot();
  });
});