/// <reference types="Cypress" />

context(`Navigation | Main Page`, () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should navigate to /about and back', () => {
        cy.fixture('navselectors').then((object) => {
            let selector = cy.get(object.static["header-about"])
            selector.click()
            cy.url().should('eq', 'http://localhost:3000/about')
            selector = cy.get(object.static["bo-closebutton"])
            selector.click()
            cy.url().should('eq', 'http://localhost:3000/')
        })
    })

    it('should navigate to docs lists (Array, Function, Number, RegExp & String) and back', () => {
        cy.fixture('navselectors').then((navsObject) => {
            cy.fixture('docspaths').then((docsObject) => {
                docsObject.domains.forEach(function(domain) {
                    let selector = navsObject.dynamic["main-docs"].replace('value', domain["name"]);
                    cy.get(selector).click();
                    selector = navsObject.static["main-searchinput"];
                    cy.get(selector).should('have.attr', 'value', `${domain["name"]}.`).clear();
                })
            })
        })
    })

    it('should open github repo in a new tab', () => {
        cy.fixture('navselectors').then((object) => {
            const selector = cy.get(object.static["header-github"])
            selector.should('have.attr', 'target', '_blank')
            selector.should('have.attr', 'href', "https://github.com/RusinovAnton/js-tldr")
        })
    })
})