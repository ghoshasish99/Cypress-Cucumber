 Cypress.Commands.add("launch", (url) => { 
    cy.visit(url)
  })
 Cypress.Commands.add("login", (username, password) => { 
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.get('form.login > .MuiButtonBase-root > .MuiButton-label').click()
  })
  Cypress.Commands.add("loginFailed", () => { 
    cy.get('.MuiTypography-caption').should('exist')
  })
  Cypress.Commands.add("createAccount", (fname, lname, email, password) => {
    let random = Math.floor(Math.random()*90000) + 10000;
    email = email.replace('Ashish','Ashish'+random); 
    cy.get('div.login > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('#firstname').type(fname)
    cy.get('#lastname').type(lname)
    cy.get('#registeremail').type(email)
    cy.get('#password').type(password)
    cy.get('#confirmpassword').type(password)
    cy.get('form.register > .MuiButtonBase-root > .MuiButton-label').click()
  })
  Cypress.Commands.add("loginSuccessful", () => { 
    cy.get('#productsearch').should('exist')
  }) 
  Cypress.Commands.add("alreadyLoggedin", (email,password) => {
    let random = Math.floor(Math.random()*90000) + 10000;
    email = email.replace('Ashish','Ashish'+random);
    cy.createAccount('Ashish','Ghosh',email,password);
    cy.loginSuccessful(); 
    cy.get('#productsearch').should('exist')
  })
  Cypress.Commands.add("searchProduct", (item) => {
    cy.get('#productsearch').type(item)
    cy.get('#searchicon').click()
  })
  Cypress.Commands.add("productSearchSuccessful", (item) => {
    cy.get('.MuiCardContent-root > :nth-child(1)').should('exist')
  })  
  Cypress.Commands.add("addProduct", (item) => {
    cy.get('.MuiCardContent-root > :nth-child(1)').click()
    cy.get('.MuiCardContent-root > .MuiButton-containedSecondary > .MuiButton-label').click()
  })
  Cypress.Commands.add("productAddSuccessful", (item) => {
    cy.get('.MuiBadge-root > .MuiSvgIcon-root > path').click()
    cy.get('#proceedtocheckout > .MuiButtonBase-root > .MuiButton-label').should('exist')
    cy.get('#proceedtocheckout > .MuiButtonBase-root > .MuiButton-label').click()
  }) 
  Cypress.Commands.add("enterAddressDetails", (title,fname,lname,addr1,addr2,city,state,zip) => {
    cy.get('#datitle').type(title)
    cy.get('#dafirstname').type(fname)
    cy.get('#dalastname').type(lname)
    cy.get('#daaddressline1').type(addr1)
    cy.get('#daaddressline2').type(addr2)
    cy.get('#dacity').type(city)
    cy.get('#dastateprovinceregion').type(state)
    cy.get('#dazippostcode').type(zip)
    cy.get('#buttonnext > .MuiButton-label').click()
  })
  Cypress.Commands.add("enterPaymentDetails", (cardNo,name,month,year,code) => {
    cy.get('#cardnumber').type(cardNo)
    cy.get('#nameoncard').type(name)
    cy.get('#expirymonth').type(month)
    cy.get('#expiryyear').type(year)
    cy.get('#securitycode').type(code)
    cy.get('#buttonconfirm > .MuiButton-label').click()
  })
//   Cypress.Commands.add("")
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
