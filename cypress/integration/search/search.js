import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given('User launched eshop login page', ()=>{
    cy.launch(Cypress.env("url"))
})

When('User logged in eshop using the valid emailid {string} and the valid password {string}', (username,password)=>{
    cy.alreadyLoggedin(username,password)
})

And('User searches for the {string}', (item) =>{
    cy.searchProduct(item)
    cy.productSearchSuccessful(item)
})

And('User adds {string} product to the cart', (item)=>{
    cy.addProduct(item)
})

Then('User should be able to view and add the listed product {string}',(item)=>{
    cy.productAddSuccessful(item)
})



