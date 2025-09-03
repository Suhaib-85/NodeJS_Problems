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

function chunkArrayWithPadding(array, chunkSize) {
    const chunks = [];

    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);

        while (chunk.length < chunkSize) {
            chunk.push('e');
        }

        chunks.push(chunk);
    }

    return chunks;
}

function main() {
    rl.question("Enter a list of integers separated by spaces: ", (input) => {
        const numbers = parseInput(input);

        if (numbers.length === 0) {
            console.log("No valid integers found in input. Please try again.");
            rl.close();
            return;
        }

        rl.question("Enter size of chunks: ", (chunkInput) => {
            const chunkSize = Number(chunkInput.trim());

            if (!Number.isInteger(chunkSize) || chunkSize <= 0) {
                console.log("Invalid chunk size. Must be a positive integer.");
                rl.close();
                return;
            }

            const resultChunks = chunkArrayWithPadding(numbers, chunkSize);

            console.log("\nChunked Output:");
            console.log("[ " + resultChunks.map(chunk => `[${chunk.join(", ")}]`).join(", ") + " ]");

            rl.close();
        });
    });
}

main();
