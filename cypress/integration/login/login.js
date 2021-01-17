import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('User launched eshop login page', ()=>{
    cy.launch(Cypress.env("url"))
})

When('User logged in eshop using the invalid emailid {string} and the invalid password {string}', (username,password)=>{
    cy.login(username,password)
})

And('User should not get logged in', () =>{
    cy.loginFailed()
})

When('User create account with {string}, {string}, {string} and {string}', (fname, lname, email, password) =>{
    cy.createAccount(fname,lname,email,password)
})

Then('User account should get created', ()=>{
    cy.loginSuccessful()
})
