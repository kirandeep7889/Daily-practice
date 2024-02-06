function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
    const minNumber = 1;
    const maxNumber = 100;
    const randomNumber = generateRandomNumber(minNumber, maxNumber);
    let numberOfGuesses = 0;
    
    alert("Welcome to the Number Guessing Game!");
    alert("You have  to choose a random number between 1 and 100.");

    while (true) {
        const userGuess = parseInt(prompt("Guess the number:"));

        if (isNaN(userGuess)) {
            alert("Please enter a valid number.");
        } else {
            numberOfGuesses++;

            if (userGuess < randomNumber) {
                alert("Too low! Try again.");
            } else if (userGuess > randomNumber) {
                alert("Too high! Try again.");
            } else {
                alert(`Congratulations! You guessed the number ${randomNumber} correctly in ${numberOfGuesses} attempts.`);
                break;
            }
        }
    }
}

function playAgain() {
    let playAgainResponse;

    do {
        startGame();
        playAgainResponse = prompt("Do you want to play again? (yes/no)").toLowerCase();
    } while (playAgainResponse === 'yes');
    
    alert("Thanks for playing! Goodbye.");
}

playAgain();
