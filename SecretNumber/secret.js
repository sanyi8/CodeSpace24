// Secret number - a short game to guess a secret number. 

// In a language of your choice, write a solution for the game that satisfies the following criteria:

// Generates a random number.

// Takes in a guess.

// Returns a string with the guess and whether that guess is lower or higher than the random number. E.g., “You answered 9. The correct answer is higher.”

// If the guess matches the random number, then return a string which confirms this. E.g., “You answered 9. This is the correct answer!”


// This challenge (deliberately) does not give any guidance about ranges, input validation, presentation etc., so you are also required to explain any assumptions that you have made. This can be done using comments in the code or in a readme file, or both.

// setup the min and max numbers
const minNum = 1;
const maxNum = 100;

// generate a random number with Math.random() 
// add .floor to transform whole numbers
const answer = Math.floor(Math.random() * (maxNum - minNum + 1))+minNum;

// check if it works    ||

// console.log(answer);
let round = 0;
let guess;
let running = true;

// run until its true
while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    //check if numebr is a number
    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    } else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number");
    } else {
        round++;
        if(guess < answer){
            window.alert("Too low try again!")
        } else if(guess > answer)
        window.alert("Too high number")
        else {
            window.alert(`Correct the number is ${answer}. It took you ${round} guessing`)

            running = false

        }
    }
}
