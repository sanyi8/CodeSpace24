describe('RPS Game Test', () => {
  //Open URL
  //PLay the game with all options each time
  //USE beforeEach to go the the right URL
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/RPS/index.html")
  });

  //Play The game with Rock option and check results
  it('play the game with Rock and check result', () => {
    cy.get('img').should("be.visible");
    //click the Rock button, it should exist
    cy.get('#rock').should('exist').click();
    //check if user option is Rock
    //cy.get('#user-option').should("have.text", "Rock");

    // DO THEN to use a Callback function
    cy.get('#computer-option').then((option) => {

      //Check computer option
      //cy.get('#computer-option').should("have.text", "Rock")

      if (option.text().includes("Rock")) {
        // The result: Tie
        // if it is Rock 
        //cy.get('#result').should("have.text", "It's a tie!")
        cy.get('#result').contains("tie")
      }
      // if it is Paper
      // The result: Computer Wins
      else if (option.text().includes("Paper")) {
        cy.get('#result').contains("You Lose!")
      }
      // The result: Computer Wins
      // if it is Scissors
      // The result: User Wins
      else {
        cy.get('#result').contains("Win!")
      };
    });

  });

      //Do the same for each options
      //PLAY WITH PAPER
       //Play The game with Paper option and check results
  it('play the game with Paper and check result', () => {
    //click the Rock button, it should exist
    cy.get('#paper').should('exist').click();
    //check if user option is Rock
    //cy.get('#user-option').should("have.text", "Rock");

    // DO THEN to use a Callback function
    cy.get('#computer-option').then((option) => {

      //Check computer option if it is ROCK
      if (option.text().includes("Rock")) {
        // The result: WIN
        //cy.get('#result').should("have.text", "It's a tie!")
        cy.get('#result').contains("Win")
      }
      // if it is Paper
      // The result: Computer Wins
      else if (option.text().includes("Paper")) {
        cy.get('#result').contains("tie")
      }
      // The result: Computer Wins
      // if it is Scissors
      // The result: User Wins
      else {
        cy.get('#result').contains("Lose")
      };

    });
  });

      //PLAY WITH Scissors
       //Play The game with Scissors option and check results
       it('play the game with Scissors and check result', () => {
        //click the Rock button, it should exist
        cy.get('#scissors').should('exist').click();
        //check if user option is Rock
        //cy.get('#user-option').should("have.text", "Rock");
    
        // DO THEN to use a Callback function
        cy.get('#computer-option').then((option) => {
    
          //Check computer option if it is ROCK
          if (option.text().includes("Rock")) {
            // The result: WIN
            //cy.get('#result').should("have.text", "It's a tie!")
            cy.get('#result').contains("Lose")
          }
          // if it is Paper
          
          else if (option.text().includes("Paper")) {
            cy.get('#result').contains("Win")
          }
          // if it is Scissors
          else {
            cy.get('#result').contains("tie")
          };
    
        });
      });
})
