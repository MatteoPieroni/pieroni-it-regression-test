// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@percy/cypress';
import scrollToBottom  from "scroll-to-bottomjs";

Cypress.Commands.add('scrollToBottom', () => {
    cy.window().then({ timeout: 12000 }, cyWindow => scrollToBottom({ remoteWindow: cyWindow, frequency: 10, timing: 1000 }));
});

Cypress.Commands.add('openSite', () => {
    cy.visit('/');
    cy.contains('Accetta').click();
});

Cypress.Commands.add('visualTestPage', ({ pageName, subPage } = {}) => {
    cy.openSite();
    
    if (typeof subPage === 'string') {
        cy.contains(subPage, { matchCase: false }).focus();
    } else if (Array.isArray(subPage)) {
        subPage.forEach((level) => {
            cy.contains(level, { matchCase: false }).focus();
        });
    }

    cy.contains(pageName, { matchCase: false }).click();
    
    cy.scrollToBottom();

    // Take a snapshot for visual diffing
    cy.percySnapshot();
});