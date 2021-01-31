describe("Homepage", () => {
    it("loads the page", () => {
      cy.openSite();

      // Take a snapshot for visual diffing
      cy.percySnapshot();
    });
  });