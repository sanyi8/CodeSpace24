//Activity - Writing The First Tests 2

// Write a test

// Visit this page (https://example.cypress.io/commands/actions).

// Query for the email input field.

// Type your email address.

// Assert about the content of the input field.

describe('Cypress Actions Test', () => {
  it('Go to Actions on Cypress page, add our email and check if its all visible', () => {
    cy.visit('https://example.cypress.io/commands/actions')
cy.log("Go to the cypress command actions website")

// I use command chaining for the following tasks to shorten code, it keeps readability
// Query for the email input field.
// Type your email address.
// Assert about the content = .value of the input field

cy.get('#email1').type('sandor@kar.dos').should('have.value', "sandor@kar.dos")
cy.log('All test passed')
  })
})