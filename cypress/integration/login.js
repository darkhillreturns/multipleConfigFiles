
describe('using cypress env from config file', function()
{

    it('calls user credentials from configFiles', function()
    {
        //run the script cy:demo to call the demo environment
        cy.visit(Cypress.config().baseUrl);
        cy.get('[type="text"]').type(Cypress.env('userEmail'));
        cy.get('[type="password"]').type(Cypress.env('userPassword'))
        cy.get('[type="submit"]').click()
    })


})


