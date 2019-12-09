/// <reference types="Cypress" />

context(`Location | Docs Pages`, () => {
  it('cy.hash() - get the current URL hash', () => {
    cy.fixture('docspaths').then(object => {
      object.domains.forEach(function(domain) {
        const path = domain.path;
        if (!domain.methods || !domain.methods.prototype) return;
        cy.visit(`/${path}/${domain.methods.prototype[0]}`);

        // https://on.cypress.io/hash
        cy.hash().should('be.empty');
      });
    });
  });

  it('cy.location() - get window.location', () => {
    cy.fixture('docspaths').then(object => {
      object.domains.forEach(function(domain) {
        const path = domain.path;
        if (!domain.methods || !domain.methods.prototype) return;
        cy.visit(`/${path}/${domain.methods.prototype[0]}`);
        // https://on.cypress.io/location
        cy.location().should(location => {
          expect(location.hash).to.be.empty;
          expect(location.href).to.eq(
            `http://localhost:3000${path}/${domain.methods.prototype[0]}`,
          );
          expect(location.host).to.eq('localhost:3000');
          expect(location.hostname).to.eq('localhost');
          expect(location.origin).to.eq('http://localhost:3000');
          expect(location.pathname).to.eq(
            `${path}/${domain.methods.prototype[0]}`,
          );
          expect(location.port).to.eq('3000');
          expect(location.search).to.be.empty;
        });
      });
    });
  });

  it('cy.url() - get the current URL', () => {
    cy.fixture('docspaths').then(object => {
      object.domains.forEach(function(domain) {
        const path = domain.path;
        if (!domain.methods || !domain.methods.prototype) return;
        cy.visit(`/${path}/${domain.methods.prototype[0]}`);
        // https://on.cypress.io/url
        cy.url().should(
          'eq',
          `http://localhost:3000${path}/${domain.methods.prototype[0]}`,
        );
      });
    });
  });
});
