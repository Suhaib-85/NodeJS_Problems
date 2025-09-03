const strInput = "Hello, everybody! My name is Sohaib.";

function getCharacterFrequency(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    const normalized = input.toLowerCase();

    const frequency = [...normalized].reduce((acc, char) => {
        if (char >= 'a' && char <= 'z') {
            acc[char] = (acc[char] || 0) + 1;
        }
        return acc;
    }, {});

    return Object.keys(frequency)
        .sort()
        .reduce((sortedAcc, key) => {
            sortedAcc[key] = frequency[key];
            return sortedAcc;
        }, {});
}


function main() {
    try {
        const frequency = getCharacterFrequency(strInput);
        console.log(frequency);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

main();
