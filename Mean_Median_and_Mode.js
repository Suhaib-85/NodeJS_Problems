function validateInput(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array.");
    }
    if (numbers.length === 0) {
        throw new Error("Array must not be empty.");
    }
    if (!numbers.every(num => typeof num === 'number' && isFinite(num))) {
        throw new Error("Array must contain only valid numbers.");
    }
}

function calculateMean(numbers) {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}

function calculateMedian(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return calculateMean([sorted[mid - 1], sorted[mid]]);
    }
    return sorted[mid];
}

function calculateMode(numbers) {
    const frequencyMap = new Map();
    let maxFreq = 0;

    for (const num of numbers) {
        const freq = (frequencyMap.get(num) || 0) + 1;
        frequencyMap.set(num, freq);
        if (freq > maxFreq) maxFreq = freq;
    }

    const modes = [];
    for (const [num, freq] of frequencyMap.entries()) {
        if (freq === maxFreq) modes.push(num);
    }

    return modes.length === frequencyMap.size ? null : (modes.length === 1 ? modes[0] : modes);
}

function getStatistics(numbers) {
    validateInput(numbers);

    return {
        mean: calculateMean(numbers),
        median: calculateMedian(numbers),
        mode: calculateMode(numbers),
    };
}

const inputNumbers = [1.5, 2.1, 2, 3.5, 4.1, 4, 4.5, 5];

try {
    const stats = getStatistics(inputNumbers);
    console.log("Statistics:");
    console.log(`Mean: ${stats.mean.toFixed(2)}`);
    console.log(`Median: ${stats.median.toFixed(2)}`);
    if (Array.isArray(stats.mode)) {
        console.log(`Mode: [ ${stats.mode.map(n => n.toFixed(2)).join(', ')} ]`);
    } else if (typeof stats.mode === 'number') {
        console.log(`Mode: ${stats.mode.toFixed(2)}`);
    } else {
        console.log("Mode: No mode");
    }

} catch (error) {
    console.error("Error:", error.message);
}
