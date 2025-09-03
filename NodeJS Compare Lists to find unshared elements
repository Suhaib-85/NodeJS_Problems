function symmetricDifference(list1, list2) {
    if (!Array.isArray(list1) || !Array.isArray(list2)) {
        throw new TypeError("Both inputs must be arrays.");
    }

    const isPrimitive = val => val === null || (typeof val !== 'object' && typeof val !== 'function');

    if (!list1.every(isPrimitive) || !list2.every(isPrimitive)) {
        throw new TypeError("Arrays must contain only primitive values (string, number, boolean, etc.).");
    }

    const set1 = new Set(list1);
    const set2 = new Set(list2);

    const setsAreEqual =
        set1.size === set2.size &&
        [...set1].every(item => set2.has(item));

    if (setsAreEqual) {
        throw new Error("Both lists are identical — no symmetric difference.");
    }

    const diff = new Set([
        ...[...set1].filter(x => !set2.has(x)),
        ...[...set2].filter(x => !set1.has(x))
    ]);

    return [...diff];
}

const list1 = [1, 2, 3, 4];
const list2 = [true, "2", 5, 6];

function main() {
    try {
        const result = symmetricDifference(list1, list2);
        let output = "{ ";

        result.forEach((val, index) => {
            output += val + (index < result.length - 1 ? ", " : "");
        });

        output += " }";
        console.log(output);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
