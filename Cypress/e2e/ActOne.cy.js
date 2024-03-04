
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


})

})