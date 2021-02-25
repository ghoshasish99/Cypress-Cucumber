# Cypress with Cucumber

[![Build Status](https://dev.azure.com/ContinuousTesting/Demo%20Project/_apis/build/status/Cypress-Pipeline?branchName=main)](https://dev.azure.com/ContinuousTesting/Demo%20Project/_build/latest?definitionId=4&branchName=main)

This project describes how to implement Cypress with Cucumber

## Getting Started

* To install Cypress : `npm install cypress --save-dev`
* To install Cypress-Cucumber   : `npm install cypress-cucumber-preprocessor --save-dev`
* To install Mocha Junit Reporter : `npm install mocha-junit-reporter --save-dev`
* To install Cypress Multi Reporters : `npm install cypress-multi-reporters --save-dev`
 
## To execute the tests

Define the scripts in `package.json` as follows :
```json
"scripts": {
    "test": "npx cypress run"
  }
```
Finally execute the tests with `npm test`

### We will see how to use [Cypress Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax)
Cypress recommends to use Custom Commands instead of Page Object Model.

Inside `cypress/support/command.js` , add your reusable commands, like so :
```Javascript
Cypress.Commands.add("login", (username, password) => { 
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.get('form.login > .MuiButtonBase-root > .MuiButton-label').click()
  })
```
### Use the custom commands in your step definitions, like so :
```Javascript
When('User logged in eshop using the invalid emailid {string} and the invalid password {string}', (username,password)=>{
    cy.login(username,password)
})
```
### A sample Feature file
```gherkin
Scenario Outline: Login to the E-Shop Application with Wrong Password
    Given User launched eshop login page
    When User logged in eshop using the invalid emailid "<EmailID>" and the invalid password "<Password>"
    Then User should not get logged in

    Examples:
      | EmailID                    | Password  |
      | testuser_negative@shop.com | Testing$1 |
```
### cypress.json
You can specify the test files and reporting options inside cypress.json, like so :
```json
"testFiles" : [
         "**/*.feature"
       ],
       "reporter": "mocha-junit-reporter",
        "reporterOptions": {
          "mochaFile": "cypress/reports/junit/test-results.[hash].xml",
          "testsuitesTitle": false
        }
```
For more on Cypress, click [here](https://www.cypress.io/)
