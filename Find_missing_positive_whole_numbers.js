function findMissingPositiveIntegers(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Input must be an array.");
    }

    if (arr.length === 0) {
        throw new Error("Input array must not be empty.");
    }

    const isInteger = val => Number.isInteger(val);

    if (!arr.every(isInteger)) {
        throw new TypeError("Array must contain only integers.");
    }

    const positives = arr.filter(num => num > 0);

    if (positives.length === 0) {
        throw new Error("No positive integers found in the array.");
    }

    positives.sort((a, b) => a - b);

    const start = positives[0];
    const end = positives[positives.length - 1];

    const positiveSet = new Set(positives);
    const missing = [];

    for (let i = start; i <= end; i++) {
        if (!positiveSet.has(i)) {
            missing.push(i);
        }
    }

    if (missing.length === 0 && start !== end) {
        return `No missing positive integers between ${start} and ${end}.`;
    }

    if (missing.length === 0 && start === end) {
        return `No missing positive integers`;
    }

    return {
        start,
        end,
        missing
    };
}

const testCases = [
    [3, 4, -1, 1],
    [1, 2, 0],
    [7, 8, 9, 11, 12],
    [1, 2, 3, 4, 5],
    [],
    [-5, -3, -1],
    [5, 3, 2, 1],
    [2],
    [1],
    [1, 3, 5, 7, 10]
];

function main() {
    testCases.forEach((input, index) => {
        try {
            const result = findMissingPositiveIntegers(input);
            if (typeof result === "string") {
                console.log(`Input = [${input}] => ${result}\n`);
            } else {
                console.log(`Input = [${input}] => Missing Positive Integers: [${result.missing.join(", ")}]\n`);
            }
        } catch (error) {
            console.error(`Error - ${error.message}\n`);
        }
    });
}

main();
