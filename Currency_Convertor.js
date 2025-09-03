import readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const currencies = {
    usd: { name: 'us dollar', rate: 283 },
    cad: { name: 'ca dollar', rate: 204 },
    eur: { name: 'euro', rate: 331 },
    gbp: { name: 'uk pound sterling', rate: 382 },
    sar: { name: 'saudi riyal', rate: 75 },
    jpy: { name: 'yen', rate: 2 },
    cny: { name: 'yuan', rate: 39 },
    pkr: { name: 'pakistani rupee', rate: 1 },
    inr: { name: 'indian rupee', rate: 3 },
    try: { name: 'turkish lira', rate: 7 },
    rub: { name: 'russian ruble', rate: 3 },
    krw: { name: 'korean won', rate: 0.2 },
    aud: { name: 'australian dollar', rate: 183 }
};

const nameToCode = Object.fromEntries(
    Object.entries(currencies).map(([code, { name }]) => [name, code])
);

function normalizeCurrency(input) {
    const trimmed = input.trim().toLowerCase();
    if (currencies[trimmed]) return trimmed;
    if (nameToCode[trimmed]) return nameToCode[trimmed];
    return null;
}

function isValidAmount(value) {
    const num = parseFloat(value);
    return !isNaN(num) && num > 0;
}

function convertCurrency(amount, baseRate, targetRate) {
    return amount * (baseRate / targetRate);
}

function toPascalCase(str) {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function displayAvailableCurrencies() {
    console.log('\nAvailable currencies:\n');
    for (const [code, { name }] of Object.entries(currencies)) {
        console.log(`- ${code.toUpperCase()} (${toPascalCase(name)})`);
    }
}

function startConversion() {
    displayAvailableCurrencies();

    rl.question('\nEnter base currency (code or name): ', (rawBase) => {
        const base = normalizeCurrency(rawBase);
        if (!base) {
            console.error('\nInvalid base currency entered.\n');
            rl.close();
            return;
        }

        rl.question('Enter target currency (code or name): ', (rawTarget) => {
            const target = normalizeCurrency(rawTarget);
            if (!target) {
                console.error('\nInvalid target currency entered.\n');
                rl.close();
                return;
            }

            if (base === target) {
                console.error('\nBase and target currencies must be different.\n');
                rl.close();
                return;
            }

            rl.question('Enter amount to convert: ', (amountInput) => {
                if (!isValidAmount(amountInput)) {
                    console.error('\nPlease enter a valid positive number for the amount.\n');
                    rl.close();
                    return;
                }

                const amount = parseFloat(amountInput);
                const baseRate = currencies[base].rate;
                const targetRate = currencies[target].rate;
                const result = convertCurrency(amount, baseRate, targetRate);

                const baseName = toPascalCase(currencies[base].name);
                const targetName = toPascalCase(currencies[target].name);

                console.log(
                    `\n${amount.toLocaleString()} ${base.toUpperCase()} (${baseName}) = ` +
                    `${result.toFixed(2)} ${target.toUpperCase()} (${targetName})\n`
                );

                rl.close();
            });
        });
    });
}

startConversion();
