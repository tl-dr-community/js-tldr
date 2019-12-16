/// <reference types="Cypress" />

context('Location | About Page', () => {
    beforeEach(() => {
        cy.visit('/about')
    })
  
    it('cy.hash() - get the current URL hash', () => {
      // https://on.cypress.io/hash
      cy.hash().should('be.empty')
    })
  
    it('cy.location() - get window.location', () => {
      // https://on.cypress.io/location
      cy.location().should((location) => {
        expect(location.hash).to.be.empty
        expect(location.href).to.eq('http://localhost:3000/about')
        expect(location.host).to.eq('localhost:3000')
        expect(location.hostname).to.eq('localhost')
        expect(location.origin).to.eq('http://localhost:3000')
        expect(location.pathname).to.eq('/about')
        expect(location.port).to.eq('3000')
        expect(location.search).to.be.empty
      })
    })
  
    it('cy.url() - get the current URL', () => {
      // https://on.cypress.io/url
      cy.url().should('eq', 'http://localhost:3000/about')
    })
})