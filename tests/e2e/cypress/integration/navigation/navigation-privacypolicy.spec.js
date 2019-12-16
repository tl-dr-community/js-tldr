/// <reference types="Cypress" />

context(`Navigation | About Page`, () => {
    beforeEach(() => {
        cy.visit('/privacy-policy')
    })

    it('should open google marketing platform in a new tab', () => {
        cy.fixture('navselectors').then((object) => {
            const selector = cy.get(object.static["privacypolicy-ga"])
            selector.should('have.attr', 'target', '_blank')
            selector.should('have.attr', 'href', "https://marketingplatform.google.com/about/")
        })
    })

    it('should open twitter in a new tab', () => {
        cy.fixture('navselectors').then((object) => {
            const selector = cy.get(object.static["privacypolicy-twitter"])
            selector.should('have.attr', 'target', '_blank')
            selector.should('have.attr', 'href', "https://twitter.com/rusinovAntonDev")
        })
    })

    it('should have mailto:rusinovantondev@gmail.com', () => {
        cy.fixture('navselectors').then((object) => {
            const selector = cy.get(object.static["privacypolicy-email"])
            selector.should('have.attr', 'href', "mailto:rusinovantondev@gmail.com")
        })
    })
})