describe('First Cypress Test', () => {
  it('should login to browserstack.com', () => {
    cy.visit('https://browserstack.com');

    cy.get('.sign-in-link > a').click();

    cy.get('#user_email_login').type('gary.b+demo@browserstack.com'); 
    cy.get('#user_password').type('Automati0nTesting!');
    cy.get('#user_submit').click();

    cy.get('#beamer-bell').should('be.visible');
  })
})