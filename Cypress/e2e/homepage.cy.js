describe('Computing course page test ', () => {     // informative title
  it('Visit Edinburgh college website and close cookies modal', () => {
    // visit url
    cy.visit('https://www.edinburghcollege.ac.uk/')

    // close the cookies modal
    // assertion: make sure the "close" button is exists and click on it
    cy.get('#ccc-close').should('exist').click().then(() => {  //callback function
      cy.log('Cookies modal closed')
    }).then(() => {
      cy.log('Cookies modal not found, continueing...')
    })    // what to do if the button doesnt exist
 
    // click on the "Courses" link  (class is "mega-dropdown")
    // assertion: make sure the "Courses" button is exists visible and clickable
    cy.contains('Courses').should('exist').and('be.visible').click()
    cy.log('Clicked on Courses link')
   

    // click on "computing" link
    // assertion: make sure the "computing" button is exists visible and clickable
    cy.contains('Computing').should('exist').and('be.visible').click()
    cy.log('Clicked on Computing Link')


    // check if we are in the "computing" course page
    // assertion: make sure the current URL is the "computing" page URL
    cy.url().should('eq', 'https://www.edinburghcollege.ac.uk/courses/explore-subject-areas/computing')
    cy.log('Computing Course Page')

  })
})

it('completes todo', () => {
  cy.visit('/') // opens TodoMVC running at "baseUrl"
  cy.get('.new-todo').type('write tests{enter}')
  cy.contains('.todo-list li', 'write tests').find('.toggle').check()
 
 
  cy.contains('.todo-list li', 'write tests').should('have.class', 'completed')
 })
 