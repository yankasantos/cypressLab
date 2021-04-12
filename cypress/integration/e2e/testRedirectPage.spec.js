describe('shold another page when run redirect event', () => {
    beforeEach(() => {
        crypto.exec('npm run db:reset && npm run db:seed')        
    })
    
    it('successfully loads the home page', () => {
        cy.visit('/')
    })

    it('successfully loads the seending data page', () => {
        cy.visit('https://docs.cypress.io/guides/getting-started/testing-your-app#Seeding-data')
    })
});
