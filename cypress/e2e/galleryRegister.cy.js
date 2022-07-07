/// <reference types="Cypress" />

describe('galery app', () => {

    it('register whidout anny data given' , () => {
        cy.visit('/register')
        cy.get('button').click()
        cy.url().should('include' , '/register');

    })

    it('register whitout first-name' , () =>{
        cy.visit('/register')
        cy.get('#last-name').type('Piton')
        cy.get('#email').type('bili1@go.go')
        cy.get('#password').type('piton1234')
        cy.get('#password-confirmation').type('piton1234')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click()
        cy.url().should('include' , '/register');

    })

    it('register whidout last-name' , () => {
        cy.visit('/register')
        cy.get('#first-name').type('Bili')
        cy.get('#email').type('bili2@go.go')
        cy.get('#password').type('piton1234')
        cy.get('#password-confirmation').type('piton1234')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click()
        cy.url().should('include' , '/register');

    })

    it('register whidout email' , () => {
        cy.visit('/register')
        cy.get('#first-name').type('Bili')
        cy.get('#last-name').type('Piton')
        cy.get('#email').type('biligo.go')
        cy.get('#password-confirmation').type('piton1234')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click() 
        cy.url().should('include' , '/register');
    })

    it('register whit wrong email format' , () => {
        cy.visit('/register')
        cy.get('#first-name').type('Bili')
        cy.get('#last-name').type('Piton')
        cy.get('#email').type('biligo.go')
        cy.get('#password').type('piton1234')
        cy.get('#password-confirmation').type('piton1234')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click() 
        cy.url().should('include' , '/register');

    })

    it('register whidout password' , () => {
        cy.visit('/register')
        cy.get('#first-name').type('Bili')
        cy.get('#last-name').type('Piton')
        cy.get('#email').type('bili3@go.go')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click() 
        cy.url().should('include' , '/register');
    })

    it('register whidout password conirmation' , () => {
        cy.visit('/register')
        cy.get('#first-name').type('Bili')
        cy.get('#last-name').type('Piton')
        cy.get('#email').type('bili4@go.go')
        cy.get('#password').type('piton1234')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click() 
        cy.url().should('include' , '/register');
    })

    it('register whit no checkbox checked' , () => {
        cy.visit('/register')
        cy.get('#first-name').type('Bili')
        cy.get('#last-name').type('Piton')
        cy.get('#email').type('bili5@go.go')
        cy.get('#password').type('piton1234')
        cy.get('#password-confirmation').type('piton1234')
        cy.get('button').click()
        cy.url().should('include' , '/register');
    })

    xit('register with walid data' , () => {
        cy.visit('/register')
        cy.get('#first-name').type('Bili')
        cy.get('#last-name').type('Piton')
        cy.get('#email').type('bili@go.go')
        cy.get('#password').type('piton1234')
        cy.get('#password-confirmation').type('piton1234')
        cy.get('input[type="checkbox"]').check()
        cy.get('button').click()
        cy.url().should('not.include' , '/register');

    })
})