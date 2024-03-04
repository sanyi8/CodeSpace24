//Activity3 - Writing The First Tests 3

describe('Cypress ', () => {
  it('Canvas template Test', () => {
    cy.visit('https://example.cypress.io/commands/actions')

//Query for the action button with a class ".action-btn" and click on it.
cy.get('.action-btn').click()
// Query for the element with an id "#action-canvas" and click on it.


cy.get('#action-canvas').click()
cy.log("clicked on the canvas")
// Query for the element with an id "#action-canvas" and click on the "topLeft".

cy.get('#action-canvas').click('topLeft')
cy.log("clicked on Top-Left corner of the Canvas")

// Query for the element with an id "#action-canvas" and click on the "bottomRight".
cy.get('#action-canvas').click('bottomRight')
cy.log("clicked on Bottom-Right corner of the Canvas")

  })
})