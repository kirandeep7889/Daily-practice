let playAgainResponse;
const scores = [];

do {
    const minNumber = 1;
    const maxNumber = 100;
    const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    let numberOfGuesses = 0;

    alert("Welcome to the Number Guessing Game!");
    alert("You have to choose a random number between 1 and 100.");

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
                scores.push(numberOfGuesses);
                break;
            }
        }
    }

    playAgainResponse = prompt("Do you want to play again? (yes/no)").toLowerCase();
} while (playAgainResponse === 'yes');

alert("Thanks for playing! Goodbye.");
alert("Scores recorded during the game: " + scores.join(', '));
