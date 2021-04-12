describe('Input search test', () => {
    it('verify if the conditions is true', () => {
        expect(true).to.equal(true)
    });

    it('verify if the conditions is false', () => {
        expect(false).to.equal(false)
    });
    
    it('visit cypress website', () => {
        cy.visit('https://docs.cypress.io/guides/getting-started/writing-your-first-test#Step-1-Visit-a-page')        
    });
    
    it('find the content types', () => {
        cy.visit('https://docs.cypress.io/guides/getting-started/writing-your-first-test#Step-2-Query-for-an-element')
        cy.contains('type')              
    });

    it('should input search', () => {
        cy.visit('/commands/contains#Syntax')
        cy.get('.DocSearch-Button-Placeholder').contains('Search').click()
        cy.get('form').type('write text').type('{enter}') //you can make the keypress enter event just put `.type({enter})`
    });

    it('Another option to get input search', () => {
        cy.visit('/commands/contains#Syntax')
        cy.get('button[aria-label="Search"]').click()
        cy.get('form').type('search anything').type('{enter}')
    });    
});
