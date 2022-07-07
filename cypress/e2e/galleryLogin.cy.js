/// <reference types="Cypress" />

describe('galery app', () => {

  it('login with bad credentials'  , () => {
    cy.visit('/');
    cy.get('.nav-link').eq(1).click()
    cy.url().should('include' , '/login');
    cy.get('#email').type('asdf@fg');
    cy.get('#password').type('12345678');
    cy.get('button').click();
    cy.url().should('include' , '/login');
  })

  it('login with no credentials' , () => {
    cy.visit('/');
    cy.get('.nav-link').eq(1).click()
    cy.url().should('include' , '/login');
    cy.get('button').click();
    cy.url().should('include' , '/login');
  })

  it('login with wrong password' , () => {
    cy.visit('/');
    cy.get('.nav-link').eq(1).click()
    cy.url().should('include' , '/login');
    cy.get('#email').type('asdf@go.go');
    cy.get('#password').type('12345678');
    cy.get('button').click();
    cy.url().should('include' , '/login');

  })



  it('login positive' , () => {
    cy.visit('/');
    cy.get('.nav-link').eq(1).click();
   // cy.get('a[href="/login"]').click()
    cy.url().should('include' , '/login');
    cy.get('#email').type('asdf@go.go');
    cy.get('#password').type('asdf1234');
    cy.get('button').click()
    //cy.url().should('not.include' , '/login');
  })

  it('logout test' , () => {
    //cy.wait(1000)
    cy.get('.nav-link').should('have.length', 4);
    cy.get('.nav-link').eq(3).click();
  })

})