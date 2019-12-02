/// <reference types="Cypress" />

context(`Navigation | About Page`, () => {
    beforeEach(() => {
        cy.visit('/about')
    })

    it('should navigate to /main and then go back', () => {
        cy.fixture('navselectors').then((object) => {
            let selector = cy.get(object.static["bo-closebutton"])
            selector.click()
            cy.url().should('eq', 'http://localhost:3000/')
            selector = cy.get(object.static["header-about"])
            selector.click()
            cy.url().should('eq', 'http://localhost:3000/about')
        })
    })

    it('should navigate to /privacy-policy and then back to /', () => {
        cy.fixture('navselectors').then((object) => {
            let selector = cy.get(object.static["about-privacypolicy"])
            selector.click()
            cy.url().should('eq', 'http://localhost:3000/privacy-policy')
            selector = cy.get(object.static["bo-closebutton"])
            selector.click()
            cy.url().should('eq', 'http://localhost:3000/')
        })
    })

    it('should open github repo header button in a new tab', () => {
        cy.fixture('navselectors').then((object) => {
            const selector = cy.get(object.static["header-github"])
            selector.should('have.attr', 'target', '_blank')
            selector.should('have.attr', 'href', "https://github.com/RusinovAnton/js-tldr")
        })
    })

    it('should open github repo link in a new tab', () => {
        cy.fixture('navselectors').then((object) => {
            const selector = cy.get(object.static["about-github"])
            selector.should('have.attr', 'target', '_blank')
            selector.should('have.attr', 'href', "https://github.com/RusinovAnton/js-tldr")
        })
    })

    it('should open tldr.sh in a new tab', () => {
        cy.fixture('navselectors').then((object) => {
            const selector = cy.get(object.static["about-tldr"])
            selector.should('have.attr', 'target', '_blank')
            selector.should('have.attr', 'href', "https://tldr.sh/")
        })
    })

    it('should open MDN licences doc in a new tab', () => {
        cy.fixture('navselectors').then((object) => {
            const selector = cy.get(object.static["about-mdnlicences"])
            selector.should('have.attr', 'target', '_blank')
            selector.should('have.attr', 'href', "https://developer.mozilla.org/en-US/docs/MDN/About#Copyrights_and_licenses")
        })
    })

    it('should open become a patreon link in the same page', () => {
        cy.fixture('navselectors').then((object) => {
            const selector = cy.get(object.static["about-patreon"])
            selector.should('not.have.attr', 'target', '_blank')
            selector.should('have.attr', 'href', "https://www.patreon.com/join/jstldr?")
        })
    })

    it('should open patron website in a new tab', () => {
        cy.fixture('navselectors').then((object) => {
            const selector = cy.get(object.dynamic["about-patron"].replace('value', 'Blazo'))
            selector.should('have.attr', 'target', '_blank')
            selector.should('have.attr', 'href', "https://zunzar.live/")
        })
    })

    it('should open medium article in a new tab', () => {
        cy.fixture('navselectors').then((object) => {
            const selector = cy.get(object.static["about-medium"])
            selector.should('have.attr', 'target', '_blank')
            selector.should('have.attr', 'href', "https://medium.com/@rusinovantondev/js-tl-dr-zen-mode-web-docs-for-javascript-developers-cf45e0143a09")
        })
    })
})