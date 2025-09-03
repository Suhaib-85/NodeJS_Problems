function findMostFrequentWords(text) {
    if (typeof text !== 'string' || text.trim() === '') {
        return { words: [], count: 0, totalFrequent: 0 };
    }

    const normalizedText = text.toLowerCase().replace(/[^\w\s]/g, '');

    const words = normalizedText.split(/\s+/);
    const wordCounts = new Map();

    let highestCount = 0;

    for (const word of words) {
        if (!word) continue;

        const count = (wordCounts.get(word) || 0) + 1;
        wordCounts.set(word, count);

        if (count > highestCount) {
            highestCount = count;
        }
    }

    const mostFrequentWords = [];

    for (const [word, count] of wordCounts.entries()) {
        if (count === highestCount) {
            mostFrequentWords.push(word);
        }
    }

    mostFrequentWords.sort();

    const limitedWords = mostFrequentWords.slice(0, 10);

    return {
        words: limitedWords,
        count: highestCount,
        totalFrequent: mostFrequentWords.length
    };
}

const paragraph = `
    Peter Piper picked a peck of pickled peppers. A Peck of pickled peppers was picked by peter piper.
    Peter piper picked a peck of pickled peppers. A peck of pickled peppers was picked by peter piper.
    Peter Piper loves pickled peppers. What do the grapes taste like? They are sour grapes, really,
    really sour. The quick brown fox jumps over the lazy dog. The quick, quick, QUICK fox! Why did he
    jump? Because the dog was too lazy to care.
`;

const result = findMostFrequentWords(paragraph);

if (result.words.length === 0) {
    console.log("No valid words found.");
} else {
    console.log("Most frequent word(s):");
    console.log(`Occurence: ${result.count}`);

    result.words.forEach((word, index) => {
        console.log(`${index + 1}. ${word}`);
    });

    if (result.totalFrequent > result.words.length) {
        console.log(`\nNote: ${result.totalFrequent} words tied as most frequent. Only showing the first ${result.words.length}.`);
    }
}
