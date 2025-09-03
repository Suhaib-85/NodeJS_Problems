import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const MAX_ATTEMPTS = 10;
const DEDUCTION_PER_WRONG = 10;
const MAX_SCORE = 100;

const random = Math.floor((Math.random() + 0.05) * 100) + 1;
let attempts = 0;
let score = MAX_SCORE;

function validateInput(guess) {
    return Number.isInteger(guess) && guess > 0 && guess <= 100;
}

function askGuess() {
    if (attempts >= MAX_ATTEMPTS) {
        console.log(`You've used all ${MAX_ATTEMPTS} attempts. The correct number was ${random}.`);
        console.log(`Your final score is 0.`);
        rl.close();
        return;
    }

    rl.question(`Attempt ${attempts + 1}/${MAX_ATTEMPTS} - Your guess: `, (input) => {
        const guess = Number(input.trim());

        if (!validateInput(guess)) {
            console.log("Please enter a valid integer between 1 and 100.\n");
            askGuess();
            return;
        }

        attempts++;

        if (guess === random) {
            score = MAX_SCORE - (DEDUCTION_PER_WRONG * (attempts - 1));
            console.log(`Correct! You guessed it in ${attempts} ${attempts === 1 ? 'try' : 'tries'}!`);
            console.log(`Your final score is ${score}.`);
            rl.close();
        } else {
            score -= DEDUCTION_PER_WRONG;

            if (guess < random) {
                console.log("Too low. Try again!\n");
            } else {
                console.log("Too high. Try again!\n");
            }

            askGuess();
        }
    });
}

(() => {
    console.log("I'm thinking of a number between 1 and 100.");
    console.log(`You have ${MAX_ATTEMPTS} attempts to guess it.`);
    console.log(`Starting score: ${MAX_SCORE}. You lose ${DEDUCTION_PER_WRONG} points per incorrect attempt.\n`);
    askGuess();
})();
