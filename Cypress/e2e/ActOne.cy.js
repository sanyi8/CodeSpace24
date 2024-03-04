
// Activity - Writing The First Tests 1

// Write a test

// Visit this page (https://example.cypress.io).

// Query for an element.

// Interact with that element.

// Assert about the content on the page.


describe('Cypress official website', () => {
  it('Interaction with a chosen element of the webpage', () => {
//go to cypress url
  cy.visit('https://example.cypress.io')
  cy.log("Navigate to the cypress official website")
  
// Query for an element.
  cy.get(':nth-child(3) > ul > :nth-child(6) > a').click()
  cy.log("Clicked on child link")
  

// Interact with that element.
  cy.get("#email1").type('test@email.com')
  cy.log("Interaction: type test@email.com to the email box")

// Assert about the content on the page.
  cy.get(':nth-child(2) > .form-control').should('be.disabled')
  cy.log("textbox is disabled!")


  // Activity - Writing The First Tests 2 **

  // go back to homepage using logo, to start over again for Test2
  cy.get('.navbar-brand').click()
  cy.contains('h1', 'Kitchen Sink').should('be.visible')
  cy.log("'Kitchen Sink exists")

// **The First Tests 2 continues here!
// Visit this page (https://example.cypress.io/commands/actions).
cy.visit('https://example.cypress.io/commands/actions')
cy.log("Go to the cypress command actions website")

// I use command chaining for the following tasks to make the code shorter
// Query for the email input field.
// Type your email address.
// Assert about the content of the input field

cy.get('#email1').type('sandor@kar.dos').should('be.visible')

})
})