
describe('using cypress env from config file', function()
{

    it('redirects Sign In if user is not logged in', function()
    {
        cy.visit(Cypress.config().baseUrl);
        cy.get('[type="text"]').type(Cypress.env('userEmail'));
        cy.get('[type="password"]').type(Cypress.env('userPassword'))
        cy.get('[type="submit"]').click()
    })


})


