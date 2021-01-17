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
    cy.productAddSuccessful(item)
})

And('User enters Address details with {string},{string}, {string}, {string},{string},{string},{string}, {string}', (title,fname,lname,addr1,addr2,city,state,zip)=>{
    cy.enterAddressDetails(title,fname,lname,addr1,addr2,city,state,zip)  
})

And('User enters Payment details with {string}, {string}, {string},{string},{string}', (cardNo,name,month,year,code) =>{
    cy.enterPaymentDetails(cardNo,name,month,year,code)
})

Then('User should get the Confirmation of Order',()=>{
    cy.screenshot()
})

