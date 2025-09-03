import readline from 'node:readline';

function normalizeInput(input) {
    return input.toLowerCase().replace(/[^\w\s]/g, '').trim();
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Chatbot is online. Type 'exit' or 'quit' to quit.\n");
rl.setPrompt("You: ");
rl.prompt();

rl.on('line', (input) => {
    const message = normalizeInput(input);

    if (message === 'exit' || message === 'quit') {
        console.log("Chatbot: Goodbye!");
        rl.close();
        return;
    }

    if (/\b(hi|hello|hey|greetings)\b/.test(message)) {
        console.log("Chatbot: Hello there! How can I help you today?");
    } else if (/\bhow\b.*\bare\b.*\byou\b/.test(message)) {
        console.log("Chatbot: I'm just code, but I feel great! Thanks for asking.");
    } else if (/\b(your name|who are you)\b/.test(message)) {
        console.log("Chatbot: I'm Chatbot 1.0 — your simple terminal companion.");
    } else if (/\bweather\b/.test(message)) {
        console.log("Chatbot: I can't predict the weather yet — but it's always sunny in the terminal.");
    } else if (/\b(thanks|thank you|thank)\b/.test(message)) {
        console.log("Chatbot: You're very welcome!");
    } else if (/\b(bye|goodbye|see you)\b/.test(message)) {
        console.log("Chatbot: Goodbye! Have a great day!");
    } else {
        console.log("Chatbot: Hmm, not sure how to respond to that. Try asking something else.");
    }

    rl.prompt();
});
