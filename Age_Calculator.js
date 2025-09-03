import readline from 'node:readline';

const today = new Date();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    rl.question("\nEnter your birthdate (YYYY-MM-DD): ", handleInput);
}

function handleInput(input) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(input)) {
        console.log("\nInvalid format used. Please retry.");
        return promptUser();
    }

    const [year, month, day] = input.trim().split('-').map(Number);
    const birthdate = new Date(year, month - 1, day);

    if (
        birthdate.getFullYear() !== year ||
        birthdate.getMonth() !== month - 1 ||
        birthdate.getDate() !== day
    ) {
        console.log("\nInvalid date entered. Please retry.");
        return promptUser();
    }

    if (today < birthdate) {
        console.log("\nBirthdate can't be in the future.");
        return promptUser();
    }

    calculateAge([year, month, day]);
}

function calculateAge([year, month, day]) {
    let years = today.getFullYear() - year;
    let months = today.getMonth() - (month - 1);
    let days = today.getDate() - day;

    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    console.log(
        `\nYou are ${years} year${years !== 1 ? 's' : ''}, ` +
        `${months} month${months !== 1 ? 's' : ''}, and ` +
        `${days} day${days !== 1 ? 's' : ''} old.\n`
    );
    rl.close();
}

promptUser();
