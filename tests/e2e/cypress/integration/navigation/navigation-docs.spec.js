/// <reference types="Cypress" />

context(`Navigation | Docs Pages`, () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should be able to navigate to all docs', () => {
        cy.fixture('navselectors').then((navsObject) => {
            cy.fixture('docspaths').then((docsObject) => {
                docsObject.domains.forEach(function(domain) {
                    const path = domain.path
                    let selector = navsObject.dynamic["main-docs"].replace('value', domain["name"]);
                    cy.get(selector).click();

                    domain.methods.prototype.forEach(function(entry) {
                        selector = navsObject.dynamic["docs-link"].replace('value', `${domain["name"]}${entry}`)
                        cy.get(selector).should('have.attr', 'href', `${path}/${entry}`)
                    })

                    selector = navsObject.static["main-searchinput"];
                    cy.get(selector).clear();
                })
            })
        })
    })
})