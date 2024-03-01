describe('Computing course page test', () =>{
    it ('Visit Edinburgh college website and close cookies '), () => {

    // visit the url
    cy.visit('https://www.edinburghcollege.ac.uk/');

    // close cookies modal
    //Assertion Validation: make sure close button is exists and click on it
    cy.get('#ccc-close').should('exist').click().then(() => {
        cy.log('Cookies modal Closed');
    }).then(() => {
        cy.log('Cookies modal not found, continuing...');
    });


    // click on course link
    // Assertion: make sure the "Courses" link exists and clickable
    cy.contains('Courses').should('exist').and('be.visible').click();
    cy.log('Clicked on Courses link')

    // click on computing link
    // Assertion: make sure the "Computing" link exists and clickable

    cy.contains('Computing').should('exist').and('be.visible').click();
    cy.log('Clicked on Computing link');
    // check if we ar in the computing coursre page
    // Assertion: make sure the current URL is the Computing course page
    cy.url().should('eq', 'https://www.edinburghcollege.ac.uk/courses/explore-subject-areas/computing' )


    }

})