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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress"/>


beforeEach(() => {

    cy.viewport(1280 , 720);

});
afterEach(()=>{
   // Clear cookies, localStorage, and sessionStorage before each test
cy.clearCookies();
cy.clearLocalStorage();
 cy.window().then((window) => {
  window.sessionStorage.clear();
     // run these tests as if in a desktop
     // browser with a 720p monitor
})
});
