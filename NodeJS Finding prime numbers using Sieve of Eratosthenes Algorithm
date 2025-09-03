import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function parseAndValidateInput(input) {
    const num = Number(input.replace(/\D+/g, ''));
    if (!Number.isInteger(num) || num <= 1) {
        return null;
    }
    return num;
}

function sieveOfEratosthenes(start, end) {
    const limit = end;
    const sieve = new Array(limit + 1).fill(true);
    sieve[0] = false;
    sieve[1] = false;

    for (let i = 2; i * i <= limit; i++) {
        if (!(sieve[i])) {
            continue;
        }
        for (let j = i * i; j <= limit; j += i) {
            sieve[j] = false;
        }
    }

    const primes = [];
    for (let i = start; i <= end; i++) {
        if (sieve[i]) primes.push(i);
    }
    return primes;
}

function main() {
    rl.question('Enter starting number (>1): ', (startInput) => {
        const start = parseAndValidateInput(startInput);
        if (start === null) {
            console.error('Invalid input: Starting number must be an integer greater than 1.');
            rl.close();
            return;
        }

        rl.question('Enter ending number (>= starting number): ', (endInput) => {
            const end = parseAndValidateInput(endInput);
            if (end === null) {
                console.error('Invalid input: Ending number must be an integer greater than 1.');
                rl.close();
                return;
            }

            if (end < start) {
                console.error('Invalid range: Ending number must be greater than or equal to starting number.');
                rl.close();
                return;
            }

            const primes = sieveOfEratosthenes(start, end);
            if (primes.length === 0) {
                console.log(`No prime numbers found between ${start} and ${end}.`);
            } else {
                console.log(`Prime numbers between ${start} and ${end}:`);
                console.log(primes.join(', '));
            }

            rl.close();
        });
    });
}

main();
