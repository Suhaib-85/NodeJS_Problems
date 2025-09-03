import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function parseInput(input) {
    return input
        .trim()
        .split(/\s+/)
        .map(Number)
        .filter(Number.isInteger);
}

function removeDuplicatesKeepLast(arr) {
    const lastIndexMap = new Map();
    arr.forEach((num, idx) => lastIndexMap.set(num, idx));

    return arr.filter((num, idx) => lastIndexMap.get(num) === idx);
}

function main() {

    rl.question("Enter a list of integers separated by spaces: ", (input) => {
        const numbers = parseInput(input);

        if (numbers.length === 0) {
            console.log("No valid integers found in input. Please try again.");
            rl.close();
            return;
        }

        const result = removeDuplicatesKeepLast(numbers);

        console.log("\nUpdated list: [", result.join(", "), "]");

        rl.close();
    });
}

main();
