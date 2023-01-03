describe('First Cypress Test', () => {
  it('should login to browserstack.com', () => {
    cy.visit('https://browserstack.com');

    cy.get('.sign-in-link > a').click();

    cy.get('#user_email_login').type(process.env.BROWSERSTACK_USERNAME); 
    cy.get('#user_password').type(process.env.BROWSERSTACK_ACCESS_KEY);
    cy.get('#user_submit').click();

    cy.get('#beamer-bell').should('be.visible');
  })
})
