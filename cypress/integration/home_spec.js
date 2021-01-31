describe("Homepage", () => {
    it("loads the page", () => {
      cy.openSite();

      cy.scrollToBottom();

      cy.percySnapshot();
    });
  });